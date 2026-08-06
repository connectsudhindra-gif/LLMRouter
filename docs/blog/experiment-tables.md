<div class="llmr-experiment-table">
<table>
<caption>xRouteBench evaluation coverage. Test-set sizes and metrics follow the paper appendix.</caption>
<thead><tr><th>Category</th><th>Test set</th><th>Content</th><th># Test</th><th>Metric</th></tr></thead>
<tbody>
<tr><td>General NLP</td><td>General mix</td><td>13 NLP subtasks</td><td>3,729</td><td>EM / MC / F1 / GSM8K / MATH / code</td></tr>
<tr><td rowspan="2">Memory</td><td>LoCoMo</td><td>Long-conversation QA</td><td>314</td><td>F1</td></tr>
<tr><td>LongMemEval</td><td>Long-term memory QA</td><td>101</td><td>F1</td></tr>
<tr><td>Time-series</td><td>TimeSeries</td><td>Seven reasoning skills</td><td>127</td><td>MC</td></tr>
<tr><td rowspan="3">Vision</td><td>Geometry3K</td><td>Geometry math (image)</td><td>61</td><td>EM</td></tr>
<tr><td>MathVista</td><td>Visual math reasoning</td><td>100</td><td>EM / MC</td></tr>
<tr><td>Charades-Ego</td><td>Egocentric video</td><td>27</td><td>EM</td></tr>
<tr><td>Personalized</td><td>Chatbot Arena / MT-Bench</td><td>Preference prompts</td><td>308</td><td>LLM judge</td></tr>
<tr class="llmr-experiment-table__total"><td>Total</td><td></td><td></td><td>4,767</td><td></td></tr>
</tbody>
</table>
</div>

<div class="llmr-experiment-table">
<table>
<caption>Performance-first xRouteBench results (α = 1.0, β = 0.0). Higher is better; the table reports the non-personalized tracks from the paper.</caption>
<thead><tr><th>Router</th><th>Generic</th><th>LoCoMo</th><th>LongMemEval</th><th>Geometry3K</th><th>MathVista</th><th>Video</th><th>TimeSeries</th><th>Avg</th></tr></thead>
<tbody>
<tr class="llmr-experiment-table__group"><td colspan="9">Rule-based baselines</td></tr>
<tr><td>Smallest-LLM</td><td>57.55</td><td>25.44</td><td>36.77</td><td>27.87</td><td>35.00</td><td><strong>33.33</strong></td><td>49.61</td><td>37.94</td></tr>
<tr><td>Largest-LLM</td><td>70.29</td><td>26.59</td><td>35.57</td><td>37.70</td><td>33.00</td><td>22.22</td><td>45.67</td><td>38.72</td></tr>
<tr class="llmr-experiment-table__group"><td colspan="9">Single-turn routers</td></tr>
<tr><td>kNNRouter</td><td>71.37</td><td>25.24</td><td><strong>38.74</strong></td><td>31.15</td><td>41.00</td><td>29.63</td><td>51.97</td><td>41.30</td></tr>
<tr><td>SVMRouter</td><td>74.21</td><td><strong>27.64</strong></td><td>38.68</td><td>42.62</td><td>47.00</td><td>29.63</td><td>55.91</td><td>45.10</td></tr>
<tr><td>MLPRouter</td><td>68.12</td><td>26.78</td><td>32.27</td><td>27.87</td><td>34.00</td><td>29.63</td><td>56.69</td><td>39.34</td></tr>
<tr><td>MFRouter</td><td>67.23</td><td>24.49</td><td>34.91</td><td>40.98</td><td>29.00</td><td>22.22</td><td>51.97</td><td>38.69</td></tr>
<tr><td>EloRouter</td><td>64.15</td><td>25.70</td><td>37.27</td><td><strong>45.90</strong></td><td><strong>50.00</strong></td><td>25.93</td><td><strong>63.78</strong></td><td>44.68</td></tr>
<tr><td>Hybrid LLM</td><td>64.68</td><td>25.89</td><td>36.56</td><td>32.79</td><td>37.00</td><td><strong>33.33</strong></td><td>51.18</td><td>40.20</td></tr>
<tr><td>RouterDC</td><td><strong>80.56</strong></td><td>24.93</td><td>36.77</td><td>16.39</td><td>24.00</td><td>25.93</td><td>45.67</td><td>36.32</td></tr>
<tr><td>GraphRouter</td><td>80.54</td><td>25.94</td><td>33.93</td><td>42.62</td><td><strong>50.00</strong></td><td>22.22</td><td>62.99</td><td><strong>45.46</strong></td></tr>
<tr><td>CausalLM</td><td>66.90</td><td>25.40</td><td>37.60</td><td>24.60</td><td>34.00</td><td><strong>33.33</strong></td><td>45.70</td><td>38.22</td></tr>
<tr class="llmr-experiment-table__group"><td colspan="9">Multi-turn routers (Qwen2.5-3B-Instruct base model)</td></tr>
<tr><td>Router-R1</td><td>35.64</td><td>24.60</td><td>17.28</td><td>14.75</td><td>18.00</td><td>22.22</td><td>23.62</td><td>22.30</td></tr>
<tr><td>kNN-MultiRound</td><td>13.99</td><td>24.70</td><td>18.32</td><td>16.39</td><td>30.00</td><td>25.93</td><td>33.07</td><td>23.20</td></tr>
<tr><td>LLM-MultiRound</td><td>12.98</td><td>24.60</td><td>17.44</td><td>14.29</td><td>31.03</td><td>25.93</td><td>30.33</td><td>22.37</td></tr>
</tbody>
</table>
</div>

<div class="llmr-experiment-table llmr-experiment-table--compact">
<table>
<caption>Persona-conditioned personalized-track accuracy. Higher is better.</caption>
<thead><tr><th>Router</th><th>Accuracy</th><th>Router</th><th>Accuracy</th></tr></thead>
<tbody>
<tr><td><strong>GMTRouter</strong></td><td><strong>68.78</strong></td><td>RouterDC</td><td>56.44</td></tr>
<tr><td>PersonalizedRouter</td><td>67.86</td><td>MFRouter</td><td>54.39</td></tr>
<tr><td>EloRouter</td><td>66.40</td><td>MLPRouter</td><td>52.93</td></tr>
<tr><td>GraphRouter</td><td>65.23</td><td>kNNRouter</td><td>51.76</td></tr>
<tr><td>SVMRouter</td><td>65.08</td><td>CausalLM</td><td>46.78</td></tr>
<tr><td>Largest-LLM</td><td>58.05</td><td>Router-R1</td><td>45.46</td></tr>
<tr><td>Hybrid LLM</td><td>57.91</td><td>Smallest-LLM</td><td>42.53</td></tr>
</tbody>
</table>
</div>

<div class="llmr-experiment-table llmr-experiment-table--compact">
<table>
<caption>Accuracy on held-out real-user Slack sessions. Higher is better.</caption>
<thead><tr><th>Router</th><th>Accuracy</th><th>Router</th><th>Accuracy</th></tr></thead>
<tbody>
<tr><td><strong>PersonalizedRouter</strong></td><td><strong>83.05</strong></td><td>RouterDC</td><td>65.25</td></tr>
<tr><td>EloRouter</td><td>82.20</td><td>kNNRouter</td><td>60.17</td></tr>
<tr><td>MLPRouter</td><td>78.81</td><td>kNN-MultiRound</td><td>60.17</td></tr>
<tr><td>SVMRouter</td><td>77.12</td><td>Smallest-LLM</td><td>55.08</td></tr>
<tr><td>Hybrid LLM</td><td>73.73</td><td>MFRouter</td><td>51.69</td></tr>
<tr><td>GMTRouter</td><td>70.70</td><td>Largest-LLM</td><td>41.53</td></tr>
<tr><td>GraphRouter</td><td>67.17</td><td>CausalLM</td><td>27.97</td></tr>
</tbody>
</table>
</div>

<div class="llmr-experiment-table">
<table>
<caption>Generic-LLM test performance when every node in a multi-agent topology is routed. Higher is better.</caption>
<thead><tr><th>Router</th><th>Star</th><th>Tree</th><th>Graph</th><th>Chain</th><th>Plan-Exec-Sum</th><th>Avg</th></tr></thead>
<tbody>
<tr><td>Largest-LLM</td><td>69.00</td><td>67.00</td><td>77.20</td><td>69.00</td><td>75.20</td><td>71.48</td></tr>
<tr><td>kNNRouter</td><td>74.80</td><td>78.60</td><td>78.60</td><td>76.60</td><td>71.80</td><td>76.08</td></tr>
<tr><td>SVMRouter</td><td>76.20</td><td>75.60</td><td>80.00</td><td>74.40</td><td>75.20</td><td>76.28</td></tr>
<tr><td>MLPRouter</td><td>75.40</td><td>76.60</td><td>76.80</td><td>78.00</td><td>71.40</td><td>75.64</td></tr>
<tr><td><strong>MFRouter</strong></td><td>75.40</td><td>74.20</td><td><strong>81.00</strong></td><td><strong>78.60</strong></td><td>73.20</td><td><strong>76.48</strong></td></tr>
<tr><td>EloRouter</td><td>73.80</td><td>72.40</td><td>78.60</td><td>76.60</td><td>75.20</td><td>75.32</td></tr>
<tr><td>GraphRouter</td><td>68.20</td><td>70.80</td><td>66.20</td><td>72.00</td><td>69.00</td><td>69.24</td></tr>
<tr><td>RouterDC</td><td><strong>77.60</strong></td><td><strong>79.60</strong></td><td>74.20</td><td>72.00</td><td><strong>76.20</strong></td><td>75.92</td></tr>
</tbody>
</table>
</div>
