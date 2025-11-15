---
layout: post
title: The Turning Point in Image Generation
date: 2025-11-14
author: Haofan Wang
permalink: /The-Turning-Point-in-Image-Generation/
---

Inspired by OpenAI researcher Yao Shunyu's "The Second Half"[^1], I'd like to share some observations about the field of image generation. Compared to the still-distant AGI, image generation seems to be at a historic inflection point.

"What I cannot create, I do not understand." Generative AI has been the most prominent field in the past few years, following image understanding. After a period of explosive growth, generated images have become virtually indistinguishable from real ones. Complex image editing tasks once confined to Photoshop are now accessible to ordinary users, and visual content creation has become easier than ever. Predictably, the performance of generative models will only continue to improve.

So what's different now? Much like energy resources, we are facing an exhaustion of image-related tasks. Those that inherently existed or could be formed through combinations have largely been solved, while new tasks have yet to be clearly defined. The field of image generation is falling into this predicament.

## Recap: 2021-2025
Rewinding the timeline five years, the research hotspots back then were vastly different from today. Many things that seem commonplace now were not so obvious then. Here are several key milestones in visual generation over the past five years that left a deep impression on me:

### CLIP Ushered in the Era of Multimodality
Before 2020, visual research was mostly confined to closed datasets like ImageNet, performing specific tasks like classification and detection through supervised learning. CV and NLP were almost entirely separate fields. This changed with the release of CLIP[^2] in early 2021. Using contrastive learning, it aligned images and text into a shared representation space, freeing image classification from predefined categories. CLIP opened the era of vision-language pre-training, and its core ideas of "large-scale pre-training" and "multimodal alignment" remain influential today. Simultaneously, the ViT[^3] architecture adopted by CLIP gradually replaced CNN as the foundational paradigm.

### Generative AI and Stable Diffusion
2022 is now called the first year of Generative AI. Early Disco Diffusion[^4] was perhaps the first glimmer of dawn; it used CLIP to guide diffusion models, allowing arbitrary text to generate artistic images. Although slow and producing rough results, it pointed the way. Then, the work that truly ignited the wave – Stable Diffusion[^5] [^6] – arrived. Its success stemmed not only from significantly improved results and being fully open-source but, more importantly, from igniting the passion of the global community. Downstream innovations like LoRA[^7], ControlNet[^8], IP-Adapter[^9], and InstantID[^10] sprang up like mushrooms after rain, attracting a massive number of developers, artists, and designers to participate, and also fueling the growth of communities like Huggingface[^11] and ComfyUI[^12]. During this phase, open-source, personalization, and controllable generation were the main themes.

### Waning Enthusiasm and Shifting Focus
Things began to change in early 2024, although video models like AnimateDiff[^13] had already emerged before. The release of Sora[^14] in February truly demonstrated the initial effectiveness of scaling up computation for video generation. Meanwhile, progress in image generation continued, but community enthusiasm seemed to be waning. When SD3[^15] failed to meet expectations and FLUX[^16] was released in August, despite its significant leap in text rendering, the atmosphere was different – judging by the number of downstream models, the community didn't embrace it as fervently as it did Stable Diffusion. FLUX itself also had issues like multilingual rendering and long-text understanding. Several major works following it aimed to address FLUX's shortcomings; for instance, Kontext/In Context[^17] [^18] [^19] [^20] used a more general reference image injection paradigm, and Qwen-Image[^21] began replacing the text encoder with an MLLM[^22]. But I realized that the previously active generation of researchers had begun turning to the new frontier of video generation. At the same time, the ballooning size of models made it difficult for individual developers to participate, and new foundational models natively integrated many capabilities that previously required plugins. Few "uncharted territories" remained in image generation, and the community fell into a fatigue of repetitive work – it no longer felt as fun and attractive as before.

## The Bitter Fact
### The Low-hanging Fruit is Gone
Generative AI is becoming as taken-for-granted as face recognition. Most core tasks have been largely solved, and achieving another industry-shaking breakthrough is by no means easy. The release of Nano Banana[^23] in August 2025 marked the end of the old research paradigm – previously independent downstream tasks like image editing, image referencing, and visual reasoning are being unified and internalized into foundational models. There's nothing wrong with this change per se, right? But imagine a PhD student who started in 2021: they might have worked on vision-language alignment or self-supervised representation learning in the first year, spent they second and third years training various vertical-specific models based on diffusion models, and in the fourth year, they might have started pondering what's next for images while also dabbling in video generation. By the time they graduate this year, much of their work over the past few years might already be obsolete. This pace of iteration has far exceeded expectations.

Last month, Llion Jones, one of the authors of the Transformer, admitted in a talk[^24] that current model architectures have stagnated, which might be hindering the next breakthrough. It feels like we're repeating past mistakes – piling trivial "innovations" onto existing architectures, cobbling together three contributions to produce a standard paper. It's all becoming rather dull. If you work in visual generation, try this quick quiz: In the past six months, which work truly impressed you? If AGI is the grander, more difficult goal that can still guide LLM/VLM research, then visual generation tasks, perhaps precisely because they are "not difficult enough," are hitting a ceiling in the short term. Today, expecting a resurgence of the vibrant, blossoming diversity seen in 2023 is probably unrealistic.

### Scaling Depicts a Pessimistic Future
If we believe in Scaling Law[^25], its returns obviously haven't shown signs of fatigue yet. But this paints a rather pessimistic picture for researchers: when we have a simple, scalable architecture like the Transformer, and when continuously adding data and compute steadily improves model performance, where is the value of research? If the capability boundaries of foundational models keep expanding, covering the vast majority of downstream tasks, then what is the purpose of vertical-specific models? Scaling sounds increasingly like an engineering problem, not a research problem. "Computation is Intelligence" seems to be becoming a reality, although there are dissenting voices – concerning data efficiency, the proliferation of synthetic data, and what happens if we eventually run out of high-quality data.

### Look Ahead, Don't Carry Any Burdens
Image generation will likely evolve into image understanding, right? So, perhaps the only thing we can do now is to look forward without being burdened by the past, especially if you've already produced representative work in this wave of generative AI. We need to accept this fact: assuming AGI is ultimately realized, 99% of human work might be rendered meaningless.

## We're in Turning Point Now
### The Open-Source Community Needs Foundational Models Comparable to Closed-Source
Stable Diffusion's success demonstrated the creativity of the open-source ecosystem. However, over the past year, closed-source models have significantly pulled ahead in performance, making research based on the previous generation of open-source models seem inadequate. Before model capabilities converge, the community urgently needs open-source foundational models with comparable performance. This might involve unifying image-video frameworks or achieving interleaved image-text generation under an autoregressive framework. Teams engaged in foundational model research or open-source development still have a chance to succeed. But the winner-takes-most dynamic means that models outside the top tier will struggle to gain community traction. Yet, this is undoubtedly an arms race for tech giants; without sufficient compute resources, it's hard to even enter the fray.

### Defining New Tasks Will Become More Valuable
For AI application companies, whether a model is open-source will become less critical. The real value lies in: how target users can use it in specific scenarios. Previously, we made breakthroughs around tasks like "stylization," "face preservation," and "text rendering." The next step is to discover and define new tasks. This is by no means easy, as it requires keen insight into users' deeper needs and pain points. For example, FIBO[^26] uses structured inputs to train models, enabling precise control over lighting, composition, and color. Kontinuous Kontext[^27] achieves continuous control over edit strength in instruction-based editing. MotionStream[^28]introduces motion control for real-time video generation. These works themselves might not be overly complex, but by defining new input and interaction forms, they open up new avenues of thought. Let me venture a bolder prediction: We are already extensively utilizing interleaved data in training, and the next logical evolution may involve generating not just visual content, but jointly predicting interleaved image-text outputs. New tasks may necessitate novel input and output modalities.

### Model as Product: The Shift from Researcher to Product Manager
In the future, the line between researcher and product manager will blur, with research directions and product requirements becoming more tightly integrated. A good researcher must also be a good product manager. Reve[^29] introduced regional control, allowing users to seamlessly manipulate object positions using bounding boxes. Sora2's Cameo[^30] achieves multi-shot scenes, audio-visual synchronization, and cross-shot character consistency – capabilities deeply intertwined with the product form. Our team's exploration in Layered Image Editing[^31] follows the same logic: starting from users' real habits in design scenarios (like modifying template layers in Canva), which in turn drives us to find technical solutions. This might become the future research paradigm: before training even begins, collaborate with product teams to plan which features are worth internalizing, consciously collect data for them, and build differentiated capabilities into commercial "silver bullets." Creativity is paramount.

### Advancements in Models Will Create Unforeseen Consumer Value
As we have repeatedly emphasized, model performance continues to improve steadily. Even tasks with currently unsatisfactory results will likely be resolved in the near future. In stark contrast, however, the field of visual generation—particularly image generation—has yet to deliver commensurate consumer value. In the earliest days of image generation, aside from community enthusiasts, it was difficult to imagine anyone willingly sharing AI-generated images on social media every day. Yet, as image quality improved and personalized generation matured, people gradually began using AI images in limited scenarios—such as for ID photos. Now, with progress in image editing, we can inject imaginative elements into otherwise mundane photos, creating playful and engaging outcomes. This trajectory demonstrates that model advancements can indeed generate consumer value that previously did not exist. A notable example is Sora2’s Cameo, which introduces a social dimension by defining specific usage contexts for characters——a promising step in this direction.

"Is the feast of image generation over? Where do we go from here?" This is the question I've been pondering since the release of Nano Banana in August. Nano Banana 2 and FLUX 2 are coming soon, representing the state-of-the-art in closed-source and open-source, respectively. The evolution hasn't stopped.

Finally, I'd like to end with a quote from Churchill: Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.


## References
[^1]: Yao Shunyu. ["The Second Half"](https://ysymyth.github.io/The-Second-Half/).
[^2]: Alec Radford, et al. [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/210300020).
[^3]: Alexey Dosovitskiy, et al. [An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale](https://arxiv.org/abs/2010.11929).
[^4]: Disco Diffusion. [https://github.com/alembics/disco-diffusion](https://github.com/alembics/disco-diffusion).
[^5]: Robin Rombach, et al.[High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752).
[^6]: Dustin Podell, et al. [SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis](https://arxiv.org/abs/2307.01952).
[^7]: Edward J. Hu, et al. [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685).
[^8]: Lvmin Zhang, et al. [Adding Conditional Control to Text-to-Image Diffusion Models](https://arxiv.org/abs/2302.05543).
[^9]: Hu Ye, et al. [IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion Models](https://arxiv.org/abs/2308.06721).
[^10]: Qixun Wang, et al. [InstantID: Zero-shot Identity-Preserving Generation in Seconds](https://arxiv.org/abs/2401.07519).
[^11]: Huggingface. [huggingface.com/](https://huggingface.com/).
[^12]: ComfyUI. [comfy.org](https://www.comfy.org/).
[^13]: Yuwei Guo, et al. [AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning](https://arxiv.org/abs/2307.04725).
[^14]: Sora. [https://openai.com/index/sora-is-here](https://openai.com/index/sora-is-here/).
[^15]: SD3. [stabilityai/stable-diffusion-3-medium](https://huggingface.co/stabilityai/stable-diffusion-3-medium)
[^16]: FLUX. [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)
[^17]: FLUX-Kontext. [black-forest-labs/FLUX.1-Kontext-dev](https://huggingface.co/black-forest-labs/FLUX.1-Kontext-dev)
[^18]: Lianghua Huang, et al. [In-Context LoRA for Diffusion Transformers](https://arxiv.org/abs/2410.23775)
[^19]: Zhenxiong Tan, et al. [OminiControl: Minimal and Universal Control for Diffusion Transformer](https://arxiv.org/abs/2411.15098)
[^20]: Yuxuan Zhang, et al. [EasyControl: Adding Efficient and Flexible Control for Diffusion Transformer](https://arxiv.org/abs/2503.07027)
[^21]: Qwen-Image. [https://github.com/QwenLM/Qwen-Image](https://github.com/QwenLM/Qwen-Image)
[^22]: Shuai Bai, et al. [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923)
[^23]: Nano Banana. [https://aistudio.google.com/models/gemini-2-5-flash-image](https://aistudio.google.com/models/gemini-2-5-flash-image)
[^24]: Llion Jones. [https://tedai-sanfrancisco.ted.com/speakers/2025/llion-jones/](https://tedai-sanfrancisco.ted.com/speakers/2025/llion-jones/)
[^25]: Jared Kaplan, et al. [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361)
[^26]: Eyal Gutflaish, et al. [Generating an Image From 1,000 Words: Enhancing Text-to-Image With Structured Captions](https://arxiv.org/abs/2511.06876)
[^27]: Rishubh Parihar, et al. [Kontinuous Kontext: Continuous Strength Control for Instruction-based Image Editing](https://arxiv.org/abs/2510.08532)
[^28]: Joonghyuk Shin, et al. [MotionStream: Real-Time Video Generation with Interactive Motion Controls](https://arxiv.org/abs/2511.01266)
[^29]: Reve. [https://app.reve.com/](https://app.reve.com/)
[^30]: Sora2. [https://sora.chatgpt.com/](https://sora.chatgpt.com/)
[^31]: Lovart. [https://www.lovart.ai](https://www.lovart.ai)