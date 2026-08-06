---
title: LLMRouter
hide:
  - navigation
---

<div class="tsr-home">
  <section class="tsr-hero">
    <div class="tsr-hero__inner">
      <div class="tsr-hero__brand">
        <div class="tsr-mark"><img src="assets/logo.png" alt="LLMRouter logo"></div>
        <h1><span class="tsr-wordmark">LLMRouter</span></h1>
      </div>
      <p class="tsr-hero__title">A Unified Library, Evaluation, and Analysis for LLM Routing</p>
      <p class="tsr-authors">Tao Feng &nbsp;&nbsp; Haozhen Zhang &nbsp;&nbsp; Zijie Lei &nbsp;&nbsp; Haodong Yue &nbsp;&nbsp; Chongshan Lin &nbsp;&nbsp; Jiaxuan You</p>
      <p class="tsr-affiliations">University of Illinois Urbana-Champaign &nbsp;·&nbsp; University of Maryland, College Park &nbsp;·&nbsp; Tsinghua University</p>
      <div class="tsr-links" aria-label="Project resources">
        <a href="#paper" aria-label="Paper link coming soon"><span aria-hidden="true">▤</span> Paper</a>
        <a href="https://github.com/ulab-uiuc/LLMRouter" target="_blank" rel="noopener"><span aria-hidden="true">⌘</span> Code</a>
        <a href="https://huggingface.co/datasets/ulab-ai/xRouteBench" target="_blank" rel="noopener"><span aria-hidden="true">🤗</span> Hugging Face</a>
        <a href="blog/">Blog</a>
        <a href="leaderboard/"><span aria-hidden="true">▤</span> Leaderboard</a>
        <a href="tutorials/">Tutorials</a>
      </div>
    </div>
  </section>

  <section class="tsr-section tsr-overview" id="overview">
    <div class="tsr-container">
      <h2>Overview</h2>
      <div class="tsr-prose">
        <p>No single large language model is optimal across all queries and budget constraints. <strong>LLMRouter</strong> is an open-source foundation for selecting the right model for each request, making routing methods easier to develop, compare, and deploy under a shared quality–cost objective.</p>
        <p>It unifies routers that were previously implemented in incompatible stacks—from simple quality predictors and cost-aware cascades to graph-based, multi-turn, and personalized policies—and provides the shared infrastructure needed to evaluate them fairly.</p>
      </div>
      <figure class="tsr-figure">
        <img src="assets/llmrouter_.png" alt="LLMRouter overview">
        <figcaption><strong>LLMRouter</strong> joins data construction, router training, inference, and evaluation in one reusable workflow.</figcaption>
      </figure>
    </div>
  </section>

  <section class="tsr-section tsr-framework" id="framework">
    <div class="tsr-container">
      <h2>A Unified Routing Formulation</h2>
      <p class="tsr-lede">Every router is represented as a sequential decision process. A shared formulation turns different routing ideas into comparable design choices.</p>
      <div class="tsr-steps">
        <article><b>01</b><h3>Describe the state</h3><p>Represent the query, user context, interaction history, and candidate-model information.</p></article>
        <article><b>02</b><h3>Make a routing decision</h3><p>Score candidate compatibility, then dispatch, escalate, or stop under the operating budget.</p></article>
        <article><b>03</b><h3>Learn and evaluate</h3><p>Optimize task quality and inference cost with a common protocol across routing settings.</p></article>
      </div>
    </div>
  </section>

  <section class="tsr-section tsr-benchmark" id="benchmark">
    <div class="tsr-container">
      <h2>xRouteBench</h2>
      <div class="tsr-prose">
        <p>LLMRouter constructs routing supervision by running a candidate pool across benchmarks, scoring each response with its task metric, and recording token-level cost. Every router then faces the same queries, models, metrics, and quality–cost protocol.</p>
        <p>The resulting benchmark spans generic LLM tasks, memory-augmented reasoning, image and video understanding, time-series, and personalized routing. This makes it possible to compare both performance and cost instead of optimizing one in isolation.</p>
      </div>
      <p class="tsr-track-line"><strong>Tracks:</strong> Generic LLM tasks · Memory · Vision &amp; video · Time-series · Personalization</p>
      <p class="tsr-center"><a class="tsr-inline-link" href="leaderboard/">Explore xRouteBench results →</a></p>
    </div>
  </section>

  <section class="tsr-section tsr-findings" id="findings">
    <div class="tsr-container">
      <h2>Key Findings</h2>
      <div class="tsr-finding-list">
        <p><strong>Learned routing improves over fixed-model baselines.</strong> The empirical study finds a 14.6% relative improvement over the strongest fixed-model baseline.</p>
        <p><strong>No router dominates every deployment.</strong> Rankings change across tasks and reverse as cost constraints become tighter.</p>
        <p><strong>User context changes the right answer.</strong> Personalized routing gains from preference and interaction history when it is available.</p>
      </div>
    </div>
  </section>

  <section class="tsr-section tsr-cite" id="citation">
    <div class="tsr-container">
      <h2>BibTeX</h2>
      <pre><code>@misc{feng2026llmrouter,
  title  = {LLMRouter: A Unified Library, Evaluation, and Analysis for LLM Routing},
  author = {Tao Feng and Haozhen Zhang and Zijie Lei and Haodong Yue and Chongshan Lin and Jiaxuan You},
  year   = {2026}
}</code></pre>
    </div>
  </section>
</div>
