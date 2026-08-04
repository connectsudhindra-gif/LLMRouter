/* xRouteBench leaderboard — renders docs/data/leaderboard.json
 *
 * Dense-table style: no fills, no tints, no chart marks. Ranking is carried by
 * sort order; the best and runner-up per column are marked typographically
 * (bold / underline) so nothing depends on colour.
 */

const XRB_DATA_URL = new URL("../data/leaderboard.json", document.currentScript.src);

function xrbRender(root, data) {
  let tableId = data.tables[0].id;
  let sortCol = null;
  let sortDesc = true;
  let family = "all";
  let limit = "all";
  let query = "";

  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function select(name, label, value, options) {
    return `<label class="xrb-select">
      <span class="xrb-select-label">${esc(label)}:</span>
      <select data-control="${name}" aria-label="${esc(label)}">
        ${options
          .map(
            (o) =>
              `<option value="${esc(o.value)}"${o.value === value ? " selected" : ""}>${esc(o.text)}</option>`
          )
          .join("")}
      </select>
    </label>`;
  }

  function draw() {
    const t = data.tables.find((x) => x.id === tableId);
    const col = sortCol || t.defaultSort || t.columns[t.columns.length - 1].id;
    const families = [...new Set(t.rows.map((r) => r.family).filter(Boolean))];
    if (family !== "all" && !families.includes(family)) family = "all";

    // Best / runner-up per column, computed over the whole track so filtering
    // never moves the marks.
    const columnTop = {};
    t.columns.forEach((c) => {
      columnTop[c.id] = [...new Set(t.rows.map((r) => r.scores?.[c.id]).filter((v) => v != null))]
        .sort((a, b) => b - a)
        .slice(0, 3);
    });

    let shown = t.rows
      .filter((r) => family === "all" || r.family === family)
      .filter((r) => !query || r.router.toLowerCase().includes(query))
      .map((r) => ({ ...r, v: r.scores?.[col] ?? null }))
      .sort((a, b) => {
        if (a.v == null && b.v == null) return 0;
        if (a.v == null) return 1;
        if (b.v == null) return -1;
        return sortDesc ? b.v - a.v : a.v - b.v;
      });
    const total = shown.length;
    if (limit !== "all") shown = shown.slice(0, Number(limit));

    // Group band: merge consecutive columns sharing a `group`.
    const bands = [];
    t.columns.forEach((c) => {
      const last = bands[bands.length - 1];
      if (c.group && last && last.label === c.group) last.span += 1;
      else bands.push({ label: c.group || "", span: 1, first: c.id });
    });
    const bandStarts = new Set(bands.map((b) => b.first));

    const num = (r, c) => {
      const v = r.scores?.[c.id];
      if (v == null) return `<td class="xrb-num${bandStarts.has(c.id) ? " xrb-div" : ""}">--</td>`;
      let cls = "xrb-num";
      if (bandStarts.has(c.id)) cls += " xrb-div";
      const rank = columnTop[c.id].indexOf(v);
      if (rank !== -1) cls += ` xrb-top-${rank + 1}`;
      return `<td class="${cls}">${v.toFixed(2)}</td>`;
    };

    root.innerHTML = `
      <section class="xrb-section" aria-label="Leaderboard results">
        <div class="xrb-sec-head"><span class="xrb-sec-no">01</span><h2>Leaderboard</h2></div>
        <p class="xrb-sec-sub">${esc(t.note || "")}</p>
        <p class="xrb-data-note">Rendered from <code>docs/data/leaderboard.json</code> · updated ${esc(data.updated)}.</p>
        <div class="xrb-controls" aria-label="Leaderboard controls">
        <div class="xrb-tabs" role="tablist" aria-label="Leaderboard track">
          ${data.tables
            .map((x) => `<button class="xrb-tab" data-control="table" data-value="${esc(x.id)}" role="tab" aria-selected="${x.id === tableId}" type="button">${esc(x.label)}</button>`)
            .join("")}
        </div>
        <input class="xrb-search" type="search" placeholder="Search routers…" value="${esc(query)}" aria-label="Filter routers by name">
        ${select("family", "Family", family, [
          { value: "all", text: "All" },
          ...families.map((f) => ({ value: f, text: f }))
        ])}
        ${select("limit", "Show", limit, [
          { value: "all", text: "All" },
          { value: "10", text: "Top 10" },
          { value: "5", text: "Top 5" }
        ])}
        <button class="xrb-reset" data-control="reset" type="button">Reset</button>
        </div>

        <div class="xrb-table-topline"><span>${esc(t.label)}</span><span class="xrb-count">${shown.length} / ${t.rows.length} routers · Updated ${esc(data.updated)}</span></div>
      <div class="xrb-table-shell" aria-label="${esc(t.label)} results">
        <div class="xrb-scroll">
        <table class="xrb-table">
          <thead>
            <tr class="xrb-band">
              <th colspan="3"></th>
              ${bands
                .map(
                  (b) =>
                    `<th colspan="${b.span}" class="xrb-div">${b.label ? esc(b.label) : "&nbsp;"}</th>`
                )
                .join("")}
            </tr>
            <tr class="xrb-head">
              <th class="xrb-rank">#</th>
              <th class="xrb-sticky">Router</th>
              <th>Family</th>
              ${t.columns
                .map(
                  (c) => `<th class="xrb-sort${c.id === col ? " xrb-active" : ""}${
                    bandStarts.has(c.id) ? " xrb-div" : ""
                  }" data-col="${c.id}" tabindex="0" role="button"
                    aria-label="Sort by ${esc(c.label)}">
                    <span class="xrb-th-label">${esc(c.label)}
                      <span class="xrb-glyph">${c.id === col ? (sortDesc ? "↓" : "↑") : "⇅"}</span>
                    </span>
                    <span class="xrb-th-unit">${esc(t.unit || "")}</span>
                  </th>`
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${
              shown.length
                ? shown
                    .map(
                      (r, i) => `<tr${r.pending ? ' class="xrb-pending"' : ""}>
                        <td class="xrb-rank">${r.v == null ? "" : i + 1}</td>
                        <td class="xrb-name xrb-sticky">${esc(r.router)}${
                        r.pending ? ' <span class="xrb-tag">pending</span>' : ""
                      }</td>
                        <td class="xrb-fam">${esc(r.family || "")}</td>
                        ${t.columns.map((c) => num(r, c)).join("")}
                      </tr>`
                    )
                    .join("")
                : `<tr><td colspan="${t.columns.length + 3}" class="xrb-empty">No router matches this filter.</td></tr>`
            }
          </tbody>
        </table>
        </div>
      </div>
      </section>

      <p class="xrb-foot">${
        limit !== "all" && total > shown.length
          ? `Showing top ${shown.length} of ${total} matching routers. `
          : ""
      }Source: ${esc(data.source || "")}</p>`;

    // ---- behaviour --------------------------------------------------------
    root.querySelectorAll("[data-control]").forEach((el) => {
      const name = el.dataset.control;
      if (name === "reset") {
        el.onclick = () => {
          family = "all";
          limit = "all";
          query = "";
          sortCol = null;
          sortDesc = true;
          draw();
        };
        return;
      }
      if (name === "table") {
        el.onclick = () => {
          tableId = el.dataset.value;
          sortCol = null;
          sortDesc = true;
          family = "all";
          draw();
        };
        return;
      }
      el.onchange = () => {
        if (name === "family") family = el.value;
        else if (name === "limit") limit = el.value;
        draw();
      };
    });

    const sortBy = (id) => {
      if (id === col) sortDesc = !sortDesc;
      else {
        sortCol = id;
        sortDesc = true;
      }
      draw();
    };
    root.querySelectorAll(".xrb-sort").forEach((th) => {
      th.onclick = () => sortBy(th.dataset.col);
      th.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          sortBy(th.dataset.col);
        }
      };
    });

    const search = root.querySelector(".xrb-search");
    search.oninput = () => {
      query = search.value.trim().toLowerCase();
      const pos = search.selectionStart;
      draw();
      const next = root.querySelector(".xrb-search");
      next.focus();
      next.setSelectionRange(pos, pos);
    };
  }

  draw();
}

function xrbInit() {
  const root = document.getElementById("xrb-leaderboard");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "1";
  fetch(XRB_DATA_URL)
    .then((r) => {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    })
    .then((d) => xrbRender(root, d))
    .catch((e) => {
      root.innerHTML = '<p class="xrb-foot">Failed to load leaderboard data.</p>';
      console.error("leaderboard:", e);
    });
}

if (typeof document$ !== "undefined") document$.subscribe(xrbInit);
else document.addEventListener("DOMContentLoaded", xrbInit);
