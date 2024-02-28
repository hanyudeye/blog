![](https://pic4.zhimg.com/v2-b001d69973dadad585d3c43d659dff3f_b.jpg)

建立一個新創 (Startup) 服務最快需要花多少時間呢 ?

**（文末有链接）**

2 年、1 年、1 季 ? 有位工程師創業家只花了 1 個月就建立了一個新創服務，最酷的是他曾經發起了「12 個月建立 12 間新創(12 Startups in 12 Months)」¹ 挑戰，他在1 年內靠 2 個 SaaS 服務賺到了 $290萬美金，這個計畫還在持續進行中。

這位奇人就是 Pieter Levels²，一位來自荷蘭的數位遊牧民族 (Digital Nomad)與一人公司創業家 (Solopreneur)。這篇文章要分享他的電子書 — 《The Indie Maker Handbook: MAKE》裡面的有趣內容。

看完文章後你可以了解：

-   這是一本非常不廢話、非常實戰的 SaaS 產品書籍
-   Pieter Levels 個人介紹
-   SaaS 產品的 7 階段生命週期
-   如何用現成的 SaaS 工具快速建立一個產品，驗證商業模式 ? (就算你不會寫程式)
-   SaaS 工具的 10 種商業模式 (aka 變現方式)

雖然自己一直在 SaaS 產業工作，但從來不了解 SaaS 產品的生命週期。

在新創公司、大型企業的軟體部門工作，通常只能看到產品開發的一個小環節 (發想功能 -> 維護功能 -> 無限循環)。我非常好奇完整的產品開發循環(發想點子 -> 實際做出來 -> 驗證商業可行性與營運 -> 轉手) 到底長什麼樣子，市面上很少有書分享這一段流程。

這本書充分的滿足我的好奇心。

## **Pieter Levels 個人介紹**

參考 No CS Degrees³ 網站的介紹 ，Pieter Levels 是一人公司創業家(Solopreneur)、數位遊牧民族 (Digital Nomad)，1 年內靠 SaaS 服務 — Nomad List 和 Remote OK 賺到了 $290 萬。

出生於荷蘭，從小就開始接觸寫程式，第一次嘗試的專案是想做出一個分析 YouTube 頻道流量的 SaaS 服務，但經營 1 年沒有收入而放棄 (Tubelytics)⁴。雖然失敗，但這個經驗大大影響他後續開發 SaaS 服務的態度。

他認為：

> 先把能解決問題的核心功能做好，當賺到新的現金 (money comes in) 時，才繼續添加功能。

## **MAKE 這本書在談些什麼? 介紹一個 SaaS 產品的 7 階段生命週期**

作者將書籍章節分成 7 個階段：

-   Idea: 發想點子
-   Build: 把點子動手做成產品
-   Launch: 發佈產品
-   Grow: 開始經營產品並讓事業長大
-   Monetize: 開始收費
-   Automate: 讓排程工具 (CronJob) 自動化處理瑣碎的任務
-   Exit: 將公司賣出去

這 7 個階段就是一個 SaaS 產品從出生到轉手的生命週期。

## **如何用現成的 SaaS 工具快速建立一個產品，驗證商業模式 ? (就算你不會寫程式)**

這本書的概念很簡單：如果你想要打造屬於自己的產品，從解決小問題、自己的問題開始。

有技術能力的人可以用程式將想法做成產品，技術能力不強（或沒有技術能力）的人，則可以組合現成的 SaaS 產品提供你的服務。

書中的一個舉例讓我印象深刻。

例如你有個點子是想提供行李運送服務，但你沒有任何的技術能力，可以如何做呢？

步驟如下：

-   **曝光服務**：建立一個 Landing Page 清楚地表達你的想法，例如使用 Carrd⁵、Wordpress 都能夠在不到 5 分鐘之內建立一個產品銷售頁。在網頁上掛上 CTA (行動呼籲)連結到下一步的填寫表單。
-   **收集名單**：建立一個表單收集客戶資料，例如使用 Typeform、Google Form 讓使用者輸入姓名、電話、運送地、目的地。在表單上掛上付款按鈕 (Typeform 可和 Stripe 做整合，台灣的場景可以用匯款的方式代替)
-   **回信通知**：使用 Zapier 串連 Gmail，收到表單申請通之後寄送回覆信給客戶
-   **紀錄資料**：使用 Zapier 串連 Google Sheet，紀錄客戶的表單資料 (若是 Google Form 可省略)
-   **指派任務**：使用 Zapier 串連 Trello，建立一張任務卡片紀錄客戶的運送需求
-   **完成工作**；聘請一個臨時員工，每天完成 Trello 卡片上的行李運送

其實上方的服務在日本已存在許久，例如全家、7–11與黑貓宅急便（Yamato Transport）配合；LAWSON、MINISTOP 則與郵局合作提供運送服務（Yu-Pack)。

但在我們家附近 (或其他國家)就是沒這個服務，因此小規模做概念驗證 (Proof of Concept, POC) 是完全可行的。而且上方的步驟流程是完全 0 成本 (工讀生一開始可以自己做)。

作者提到的應用場景雖然是網頁服務 (Web App)，但我認為背後的概念可以運用在許多地方：先找出一個小問題，然後用現成工具/自己會的工具把流程兜出來，掛上一個「Pay (付費)」按鈕或管道，然後上線試營運。

我把相同的概念應用在銷售自己的數位產品⁶。

例如把 Obsidian 系列文製作成 3 小時的錄播課程後：

-   用 Medium 跟 Substack 當作 Landing Page 宣傳商品
-   用 Gumroad 跟PayPal 當作收款工具 (一開始請網友用匯款的方式購買)
-   用 Google Sheet 當作記帳工具

過程中除了買剪輯軟體 Screenflow 的花費外，其他的成本是 0 元。

## **SaaS 工具的 10 種商業模式 (aka 變現方式)**

另一個有意思的章節是 Monetization (變現)，作者分享了 10 種變現的方法與案例，我順便整理已知的 SaaS 服務在後方。

這 10 種方式分別是：

-   **Limited features to paid users:** 依據付費程度提供有限功能，例如 Ghost, Whimsical, Notion 都屬於此類。
-   **Pay per feature:** 開啟一個進階功能付一次費用，例如遊戲 App 很常叫玩家付費才能解鎖特殊角色。
-   **Ads**: 聯播網廣告，例如Google Adsense 或Native Ads (原生廣告)，常見於部落格。
-   **Sponsorships:** 常見於Open Source 專案，當一個專案有很多人使用時（例如 Github 上的Star, Fork 數量很高) ，可以主動向企業提案贊助，把企業的Logo 放到網站上幫忙曝光。
-   **Patronage:** 打賞獲得好康，例如 Creativity powered by membership | Patreon⁷ 上的專案。
-   **Subscription-bases membership:** 訂閱制，有訂閱才給用。例如Heptabase、Medium Paywall、Adobe 系列產品。
-   **Community model:** 讓使用者對社群黏著因此付費，例如Pieter Levels 的 Nomad List⁸、交友軟體、暢學宇宙。
-   **Job boards:** 跟 2B 公司合作，幫忙刊登工作廣告。例如國內的人力徵才網站。
-   **Conditional Payments:** 這種變現方式非常特別，例如Pieter Levels的「Go fucking do it⁹」網站，你可以對一個任務設定罰款金額與截止期限，如果你沒在截止期限完成任務的話，會被收取罰款金額給網站提供方 Pieter Levels。
-   **Productizing an agency into SaaS:** 幫助其他人做 SaaS 服務時延伸出來的小專案，最終變成主理產品。

例如 Typeform原先是創辦人 David Okuniev，為了某家馬桶公司展覽需要而建立的表單工具。

### **Takeaway**

下面 3 點是我從書中獲益最大的觀念：

1.  如何找到創業的商業點子? 答案是從解決自己的問題開始
2.  任何的科技/工具/方法論都是為了要解決一個問題而存在，否則它絕對不會有使用者。意思是：不要用答案去找問題，而是先有問題後再去組合答案。
3.  新的工具不是重點，重點是你最後想要完成什麼

**強力推薦給在軟體業工作的人，這是一本非常實戰的產品書籍**

**获取链接：[World of creator | 创作者星球](https://link.zhihu.com/?target=https%3A//worldofcreator.com/i/cao_woc/product/bb1922b5-a78a-4757-a1a0-faf22ff20e27)**