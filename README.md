# 🚀 daily-arXiv-ai-enhanced

> 基于 @dw-dengwei 的原项目定制，专注大模型可解释性方向。

This innovative tool transforms how you stay updated with arXiv papers by combining automated crawling with AI-powered summarization.

## 🎯 本 Fork 关注领域

arXiv 分类：**cs.LG（机器学习）, cs.CL（自然语言处理）, cs.AI（人工智能）**

聚焦方向：大模型可解释性（LLM Interpretability / Explainability），包括但不限于：
- Mechanistic Interpretability（机制可解释性）
- Probing / Circuit Analysis
- Activation Engineering
- Feature Visualization & Sparse Autoencoders
- Chain-of-Thought Faithfulness
- Safety & Alignment via Interpretability

## ✨ Key Features

🎯 **Zero Infrastructure Required**
- Leverages GitHub Actions and Pages - no server needed
- Completely free to deploy and use

🤖 **Smart AI Summarization**
- Daily paper crawling with DeepSeek-powered summaries
- Cost-effective: Only ~0.2 CNY per day

💫 **Smart Reading Experience**
- Personalized paper highlighting based on your interests
- Cross-device compatibility (desktop & mobile)
- Local preference storage for privacy
- Flexible date range filtering

🧩 **SKILL System**
- Plug-and-play skill modules for customizing paper filtering

⚙️ **Easy Preference Export & Integration**
- One-click copy in Settings to export your keywords and authors configuration
- Seamlessly combine exported preferences with SKILL for reproducible and shareable setups

---

# How to use

This repo will daily crawl arXiv papers about **cs.LG, cs.CL and cs.AI**, and use **DeepSeek** to summarize the papers in **Chinese**.

**Instructions:**
1. Fork this repo to your own account.
2. Go to: your-own-repo -> Settings -> Secrets and variables -> Actions
3. Go to Secrets. Create two repository secrets:
   - `OPENAI_API_KEY` → your DeepSeek API key
   - `OPENAI_BASE_URL` → `https://api.deepseek.com`
4. [Optional] Set a password in `secrets.ACCESS_PASSWORD` if you do not wish others to access your page.
5. Go to Variables. Create the following repository variables:
   - `CATEGORIES`: `cs.LG, cs.CL, cs.AI`
   - `LANGUAGE`: `Chinese`
   - `MODEL_NAME`: `deepseek-chat`
   - `EMAIL`: your email for push to GitHub
   - `NAME`: your name for push to GitHub
6. Go to your-own-repo -> Actions -> arXiv-daily-ai-enhanced
7. Click **Run workflow** to test (takes about one hour).
8. Set up GitHub Pages: Repo Settings -> Pages -> Source="Deploy from a branch", Branch="main", "/(root)".
9. Visit https://\<username\>.github.io/daily-arXiv-ai-enhanced/

---

## 🙏 原项目

基于 [dw-dengwei/daily-arXiv-ai-enhanced](https://github.com/dw-dengwei/daily-arXiv-ai-enhanced) 定制。

## Contributors

Thanks to the following special contributors for contributing code, discovering bugs, and sharing useful ideas for this project!!!

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <a href="https://github.com/JianGuanTHU"><img src="https://avatars.githubusercontent.com/u/44895708?v=4" width="100px;" alt="JianGuanTHU"/><br /><sub><b>JianGuanTHU</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/Chi-hong22"><img src="https://avatars.githubusercontent.com/u/75403952?v=4" width="100px;" alt="Chi-hong22"/><br /><sub><b>Chi-hong22</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/chaozg"><img src="https://avatars.githubusercontent.com/u/69794131?v=4" width="100px;" alt="chaozg"/><br /><sub><b>chaozg</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/quantum-ctrl"><img src="https://avatars.githubusercontent.com/u/16505311?v=4" width="100px;" alt="quantum-ctrl"/><br /><sub><b>quantum-ctrl</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/Zhao2z"><img src="https://avatars.githubusercontent.com/u/141019403?v=4" width="100px;" alt="Zhao2z"/><br /><sub><b>Zhao2z</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/eclipse0922"><img src="https://avatars.githubusercontent.com/u/6214316?v=4" width="100px;" alt="eclipse0922"/><br /><sub><b>eclipse0922</b></sub></a><br />
      </td>
    </tr>
  </tbody>
  <tbody>
   <tr>
      <td align="center" valign="top">
        <a href="https://github.com/xuemian168"><img src="https://avatars.githubusercontent.com/u/38741078?v=4" width="100px;" alt="xuemian168"/><br /><sub><b>xuemian168</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/Lrrrr549"><img src="https://avatars.githubusercontent.com/u/71866027?v=4" width="100px;" alt="Lrrrr549"/><br /><sub><b>Lrrrr549</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/AinzRimuru"><img src="https://avatars.githubusercontent.com/u/59441476?v=4" width="100px;" alt="AinzRimuru"/><br /><sub><b>AinzRimuru</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/fengxueguiren"><img src="https://avatars.githubusercontent.com/u/153522370?v=4" width="100px;" alt="fengxueguiren"/><br /><sub><b>fengxueguiren</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/zerocpp"><img src="https://avatars.githubusercontent.com/u/2630297?v=4" width="100px;" alt="zerocpp"/><br /><sub><b>zerocpp</b></sub></a><br />
      </td>
   </tr>
  </tbody>
</table>
