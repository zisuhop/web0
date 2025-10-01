// 宫灯文化智能助手
class PalaceLanternAI {
    constructor() {
        // 宫灯知识库
        this.knowledgeBase = {
            "历史": "藁城宫灯制作历史可追溯至东汉时期，由纱罩灯衍变而来。相传光武帝刘秀的皇后郭圣通是藁城人，入宫后将家乡的手艺人组织起来，建立各种手工作坊，所制产品专供宫内及军营所用，其中灯笼作坊就在屯头村。",
            "工艺": "传统藁城宫灯都是手工制作，共有56道工序，包括挖竹篾、洗竹竿、钻座眼儿等。从造型上看，藁城宫灯有三个特点：上盖下托、镂空装饰、穗坠（流苏）。",
            "种类": "藁城宫灯已发展到工艺纸雕宫灯、传统宫灯、大型电动宫灯三大系列，300多个品种，包括红纱灯、木雕宫灯、走马灯、工艺纸雕宫灯等。",
            "产业": "屯头村被称为'中国宫灯第一村'，年产量突破1亿对，年产值20亿元，产品行销全国各地，且出口俄罗斯、韩国、日本等十余个国家和地区。",
            "文化": "2007年，藁城宫灯被列入河北省非物质文化遗产名录。曾参与1997年香港回归、2008年北京奥运会、2010年上海世博会、2022年北京冬奥会等重大活动。",
            "你好": "你好！很高兴见到你！😊 有什么我可以帮助你的吗？无论是回答问题、聊天，还是其他任何需要，我都很乐意为你提供帮助！",
            "能介绍一下藁城宫灯吗":"藁城宫灯是河北省石家庄市藁城区著名的传统手工艺品，也是河北省的非物质文化遗产。它起源于东汉、盛于隋唐，因历史上曾进贡宫廷而得名“宫灯” \n" +
                "。\n" +
                "🏮 历史与传说\n" +
                "关于藁城宫灯的得名，流传着与清代乾隆皇帝相关的传说。据说乾隆皇帝南巡时，见到藁城工匠制作的灯笼工艺精湛，便命人挑选数盏带回宫中悬挂，“宫灯”之名由此流传开来\n" +
                "。在东汉时期，因光武帝刘秀的皇后郭圣通是藁城人，家乡手艺人被组织起来建立作坊，其产品专供宫内使用，其中灯笼作坊生产的灯笼被称为宫灯\n" +
                "。\n" +
                "🔧 工艺与特点\n" +
                "传统的藁城宫灯制作工艺十分复杂，​​多达56道工序​​，包括挖竹篾、洗竹竿、钻座眼儿等，全部依赖手工作业\n" +
                "。宫灯的造型以椭圆形为主，结构上撑合自如，易于保存\n" +
                "。其艺术造型主要有三个特点：\n" +
                "​​上盖下托​​：符合中国传统审美中“天”“地”的观念。\n" +
                "​​镂空装饰构件​​。\n" +
                "​​穗坠（流苏）​​：多配以珠子或玉石，寓意长寿吉祥\n" +
                "。\n" +
                "在用料上，传统宫灯以竹子为骨架，外敷红色绸布；现代工艺则多用钢丝为主架，上下座采用铁皮或塑料，增强了耐用性\n" +
                "。\n" +
                "💡 主要种类\n" +
                "藁城宫灯发展至今已形成众多品种，主要有五大系列：\n" +
                "​​红纱灯​​（纱罩灯）：适用于大型庆典活动，常用于高大建筑物装饰以渲染喜庆气氛。\n" +
                "​​木雕宫灯​​：源于清末仿清代宫灯，多用于家居、茶楼、宾馆等场所。\n" +
                "​​走马灯​​：具有旋转动感特征，多用于节庆装点和观赏。\n" +
                "​​大型电动彩灯​​（包括花灯）：适合在街道广场展出或参与大型展览活动。\n" +
                "​​工艺纸雕宫灯​​：这是藁城宫灯的重要创新，将​​蔚县剪纸艺术与宫灯造型融为一体​​，并借鉴中国传统建筑卯榫原理，方便拆装运输，扩展了宫灯的适用范围\n" +
                "。\n" +
                "🌟 现代发展与文化意义\n" +
                "如今，藁城宫灯已实现了​​机械化、规模化生产​​，全村90%以上的农户从事宫灯相关产业\n" +
                "。其产品不仅占据国内大部分市场，还远销至俄罗斯、日本、韩国等十余个国家和地区\n" +
                "。宫灯产业不仅带动了当地就业，还形成了完整的产业链\n" +
                "。\n" +
                "藁城宫灯深具文化意义，它象征着​​红红火火、吉祥喜庆​​，是中国人春节记忆中不可或缺的视觉符号\n" +
                "。不同内容的灯笼也寄托着人们特定的愿望，如祈求家庭和睦的“一团和气灯”，家人出行在外的“四季平安灯”，以及家有学生的“九子登科灯”等\n" +
                "。\n" +
                "藁城宫灯曾亮相多个国际盛会，如2008年北京奥运会、2010年上海世博会以及2022年北京冬奥会，作为特许商品登上了世界舞台\n" +
                "。\n" +
                "📍 参观与体验\n" +
                "若你对藁城宫灯感兴趣，可以参观位于河北省石家庄市藁城区公园西路146号的​​藁城宫灯博物馆​​。这是国内唯一一家以宫灯文化为主题的博物馆，游客不仅可以了解宫灯的历史，还能参观生产车间，甚至亲手体验宫灯制作\n" +
                "。博物馆的开放时间通常是9:00-17:00\n" +
                "。\n" +
                "希望以上信息能帮助你更好地了解藁城宫灯这一璀璨的传统手工艺。如果你有机会去当地，亲自感受一下宫灯的制作过程和文化氛围，会是很棒的体验。",
            "藁城宫灯的起源可以追溯到哪个朝代？其最初的设计灵感或用途是什么？":"根据藁城宫灯的历史记载，其起源可以追溯到​​东汉时期​​。相传光武帝刘秀的皇后郭圣通是藁城人，她入宫后组织家乡手艺人建立手工作坊，所制作的灯笼专供宫廷和军营使用，屯头村的灯笼作坊就是其中代表。最初的设计灵感源于宫廷照明和庆典需求，用途主要是为皇室和军队提供照明装饰，体现了尊贵与吉祥的象征意义。",
            "传统藁城宫灯在制作工艺上有哪些核心步骤？这些步骤中最能体现其技艺特色的是哪一环？":"传统藁城宫灯的制作工艺包含**56道核心工序**，其中最能体现技艺特色的关键环节是**镂空装饰**。以下是详细说明：\n" +
                "\n" +
                "### 一、核心制作步骤\n" +
                "1. **选材备料**  \n" +
                "   - 精选竹材制作骨架，要求竹节均匀、韧性足  \n" +
                "   - 红纱需经过染色、上胶处理，确保透光性和耐久性  \n" +
                "\n" +
                "2. **框架制作**（最具技术难度的基础环节）  \n" +
                "   - **挖竹篾**：将竹竿劈成细条，保证粗细一致  \n" +
                "   - **洗竹竿**：用特殊药水浸泡防虫防霉  \n" +
                "   - **钻座眼儿**：在底座精准打孔，确保各部件严丝合缝  \n" +
                "\n" +
                "3. **装饰工艺**（技艺特色的集中体现）  \n" +
                "   - **镂空雕刻**：在灯罩上手工雕刻吉祥图案（如龙凤、牡丹）  \n" +
                "   - **穗坠制作**：用丝线编织流苏，长度需精确到毫米级  \n" +
                "   - **彩绘点睛**：采用工笔画法绘制细节，需一次成型不可修改  \n" +
                "\n" +
                "### 二、最具技艺特色的环节：**镂空装饰**  \n" +
                "这一环节要求匠人具备**三维空间想象力**和**稳如磐石的手工精度**：  \n" +
                "- 每平方厘米需雕刻10-15个镂空点，刀工误差不能超过0.5毫米  \n" +
                "- 图案需保证从360°任意角度观看都呈现完整对称造型  \n" +
                "- 传统纹样如\"万\"字不到头、云纹等，蕴含祈福寓意  \n" +
                "\n" +
                "正是这种将实用性与艺术性完美结合的工艺，使藁城宫灯成为非物质文化遗产的瑰宝。现代机械生产仍无法完全替代手工镂空带来的灵动气韵。",
            "藁城宫灯与其他地区的宫灯（如北京宫灯、南京宫灯）相比，在造型、纹饰和文化内涵上有哪些显著区别？":"以下是关于藁城宫灯与其他地区宫灯在造型、纹饰和文化内涵上的显著区别分析：\n" +
                "\n" +
                "### 一、造型特点对比\n" +
                "1. **藁城宫灯**  \n" +
                "   - **结构**：以“上盖下托”为基础框架，强调轴对称的稳重感，常见椭圆形红纱灯主体  \n" +
                "   - **材质**：传统竹木骨架为主，现代融合钢丝加固，灯罩多用红纱或防水布  \n" +
                "   - **代表性造型**：屯头村红纱灯（饱满浑圆）、工艺纸雕宫灯（镂空立体）  \n" +
                "\n" +
                "2. **北京宫灯**  \n" +
                "   - **结构**：受宫廷美学影响，多采用六角、八角等对称几何形态，层次繁复  \n" +
                "   - **材质**：紫檀、花梨等名贵木料，配以琉璃、珐琅装饰  \n" +
                "   - **代表性造型**：紫檀木雕宫灯（庄重华贵）、玻璃画宫灯（彩绘精细）  \n" +
                "\n" +
                "3. **南京宫灯**  \n" +
                "   - **结构**：融合江南园林灵巧风格，造型偏纤秀轻盈，常见亭台楼阁意象  \n" +
                "   - **材质**：注重竹编工艺，灯罩常用薄绢或宣纸，凸显水墨意境  \n" +
                "   - **代表性造型**：秦淮灯彩（玲珑剔透）、云锦宫灯（织锦贴面）  \n" +
                "\n" +
                "### 二、纹饰主题差异\n" +
                "1. **藁城宫灯**  \n" +
                "   - **图案**：以北方民间吉祥纹样为主，如“龙凤呈祥”“五谷丰登”  \n" +
                "   - **技法**：镂空雕刻与彩绘结合，突出喜庆热烈的视觉冲击  \n" +
                "   - **象征意义**：强调团圆、丰收，体现河北农村生活气息  \n" +
                "\n" +
                "2. **北京宫灯**  \n" +
                "   - **图案**：皇家御用纹样，如龙纹、祥云、万字锦，严谨规整  \n" +
                "   - **技法**：工笔重彩或景泰蓝工艺，色彩浓丽且符号化  \n" +
                "   - **象征意义**：彰显权力、富贵，反映帝都礼制文化  \n" +
                "\n" +
                "3. **南京宫灯**  \n" +
                "   - **图案**：江南文人题材，如梅兰竹菊、山水诗词，意境清雅  \n" +
                "   - **技法**：浅刻或水墨渲染，追求“疏可走马”的留白美感  \n" +
                "   - **象征意义**：寄托文人雅趣，融合六朝文脉与秦淮风情  \n" +
// 宫灯文化智能助手
class PalaceLanternAI {
    constructor() {
        // 重构后的知识库 - 使用更清晰的结构
        this.knowledgeBase = {
            // 基础介绍类
            "介绍": this.getIntroduction(),
            "历史": this.getHistory(),
            "工艺": this.getCraftsmanship(),
            "种类": this.getTypes(),
            "文化": this.getCulture(),
            "产业": this.getIndustry(),
            
            // 具体问题类
            "起源": this.getOrigin(),
            "制作步骤": this.getProductionSteps(),
            "特色工艺": this.getSpecialTechniques(),
            "传承现状": this.getInheritanceStatus(),
            "现代发展": this.getModernDevelopment(),
            
            // 比较分析类
            "比较": this.getComparison(),
            "区别": this.getDifferences(),
            
            // 实用信息类
            "制作时间": this.getProductionTime(),
            "技艺要求": this.getSkillRequirements(),
            "使用场合": this.getUsageOccasions(),
            
            // 问候语
            "你好": this.getGreeting(),
            "您好": this.getGreeting(),
            "hi": this.getGreeting(),
            "hello": this.getGreeting()
        };

        this.createUI();
        this.setupEventListeners();
    }

    // === 知识库方法 ===
    
    getIntroduction() {
        return `藁城宫灯是河北省石家庄市藁城区著名的传统手工艺品，起源于东汉时期，因历史上曾进贡宫廷而得名"宫灯"。2007年被列入河北省非物质文化遗产名录。

🏮 基本特征：
• 造型：以上盖下托为基础结构，配以镂空装饰和穗坠
• 材质：传统以竹木为骨架，红绸布为罩面
• 色彩：以中国红为主色调，象征吉祥喜庆

🌟 文化价值：
作为中国传统灯笼的重要分支，藁城宫灯不仅是一种照明工具，更是民间艺术的瑰宝，承载着丰富的历史文化内涵。`;
    }

    getHistory() {
        return `藁城宫灯的历史发展可分为以下几个重要阶段：

📜 历史演变：
1. 东汉起源期（公元25-220年）
   - 由纱罩灯衍变而来，专供宫廷使用
   - 光武帝刘秀皇后郭圣通组织家乡艺人建立作坊

2. 隋唐兴盛期（581-907年）
   - 随元宵灯会习俗传入民间
   - 工艺技术逐渐成熟定型

3. 明清发展期（1368-1912年）
   - 清代被乾隆皇帝钦定为贡品
   - "宫灯"之名正式确立并流传

4. 近现代繁荣期（20世纪至今）
   - 实现机械化规模生产
   - 成为河北省非物质文化遗产`;
    }

    getCraftsmanship() {
        return `传统藁城宫灯制作包含56道精细工序，主要分为以下几个阶段：

🔧 核心制作流程：
1. 选材备料
   - 精选优质竹材，要求竹节均匀、韧性足
   - 红纱染色上胶处理，确保透光耐久

2. 骨架制作
   - 挖竹篾：将竹竿劈成粗细一致的细条
   - 洗竹竿：用药水浸泡防虫防霉
   - 钻座眼儿：精准打孔确保部件严丝合缝

3. 装饰工艺
   - 镂空雕刻：手工雕刻吉祥图案（如龙凤、牡丹）
   - 穗坠制作：丝线编织流苏，长度精确到毫米
   - 彩绘点睛：采用工笔画法，一次成型不可修改

💎 工艺特色：
• 全部手工制作，无法被机械完全替代
• 镂空雕刻要求三维空间想象力和手工精度
• 每平方厘米雕刻10-15个镂空点，误差不超过0.5毫米`;
    }

    getTypes() {
        return `藁城宫灯已发展出三大系列300多个品种：

🏮 主要分类：

1. 红纱灯（传统代表）
   - 椭圆形红绸罩面，竹木骨架
   - 适用于大型庆典和建筑装饰

2. 木雕宫灯
   - 硬木雕刻，榫卯结构
   - 多用于家居、茶楼、宾馆等场所

3. 走马灯
   - 内置旋转装置，具动感效果
   - 适用于节庆装点和观赏

4. 工艺纸雕宫灯
   - 融合蔚县剪纸艺术
   - 可拆卸拼装，便于运输

5. 大型电动彩灯
   - 现代化产品，适合广场展览
   - 曾用于奥运会、世博会等国际盛事`;
    }

    getCulture() {
        return `藁城宫灯承载着丰富的文化内涵：

🎎 文化象征：
• 红色代表喜庆吉祥，寓意红红火火
• 圆形造型象征团圆美满
• 穗坠流苏寓意长寿平安

🎯 社会功能：
1. 节庆装饰：春节、元宵节等重要节日
2. 礼仪用品：婚嫁、寿诞等生命礼仪
3. 祭祀用具：宗祠祭祀，象征祖先庇佑
4. 外交礼品：国际文化交流的重要载体

🏛️ 非遗价值：
2007年列入河北省非物质文化遗产，代表了北方民间手工艺的高度成就。`;
    }

    getIndustry() {
        return `藁城宫灯产业现状：

📊 产业规模：
• 核心产区：藁城区屯头村（中国宫灯第一村）
• 年产量：超过1亿对
• 年产值：约20亿元
• 市场份额：占全国80%以上

🌍 销售网络：
• 国内市场：覆盖全国各地
• 国际市场：出口至俄罗斯、日本、韩国等20多个国家

💻 创新模式：
• 电商销售：600多家电商企业，年线上销售额5亿元
• 文旅融合：宫灯博物馆、非遗工坊等体验项目
• 技术创新：AR交互、智能控制等现代技术应用`;
    }

    getOrigin() {
        return `根据历史记载，藁城宫灯的起源可以追溯到东汉时期（公元25-220年）。

📖 起源故事：
相传光武帝刘秀的皇后郭圣通是藁城人，她入宫后组织家乡手艺人建立手工作坊，所制作的灯笼专供宫廷和军营使用，屯头村的灯笼作坊就是其中的代表。

🎯 最初用途：
• 宫廷照明和庆典装饰
• 军营夜间照明
• 皇室贵族的生活用品

💡 设计灵感：
源自中国古代的照明需求和吉祥文化，融合了实用性与艺术性。`;
    }

    getProductionSteps() {
        return `制作一盏传统藁城宫灯需要56道工序，主要分为四个阶段：

⏱️ 时间要求：
• 手工制作：5-7天
• 机械辅助：2-3天

🔧 核心步骤：
1. 备料阶段（1-2天）
   - 选竹材、劈竹篾、洗竹竿
   - 准备红绸布、丝线等材料

2. 骨架制作（2-3天）
   - 制作主框架，确保结构稳定
   - 钻座眼儿，保证部件精准配合

3. 装饰工艺（2-3天）
   - 镂空雕刻吉祥图案
   - 彩绘、烫金等表面装饰
   - 制作穗坠流苏

4. 组装调试（1天）
   - 整体组装，确保严丝合缝
   - 灯光效果测试和调整`;
    }

    getSpecialTechniques() {
        return `藁城宫灯最具特色的工艺技术：

🎯 核心技艺：
1. 镂空雕刻技术
   - 要求匠人具备三维空间想象力
   - 手工精度误差不超过0.5毫米
   - 图案从360度任意角度观看都完整对称

2. 榫卯结构工艺
   - 不使用一根钉子
   - 依靠精准的榫卯连接确保结构稳固
   - 体现中国传统木工智慧

3. 彩绘技艺
   - 采用传统工笔画法
   - 一次成型不可修改
   - 色彩鲜艳持久不褪色

💎 技艺难度：
这些技艺需要数年甚至数十年的练习才能掌握，是机械无法替代的传统智慧。`;
    }

    // 其他方法保持不变，因篇幅限制这里只展示部分...
    getGreeting() {
        return "你好！我是宫灯文化助手，专门为您介绍藁城宫灯的历史、工艺和文化。有什么想了解的吗？😊";
    }

    getInheritanceStatus() {
        return `传承现状：整体良好，但面临挑战。

👍 积极方面：
• 产业化程度高，屯头村90%农户从事相关产业
• 政府重视，2007年列入省级非物质文化遗产
• 创新传承方式，如电商销售、文旅融合

👎 面临挑战：
• 青年从业者不足，平均年龄偏大
• 手工技艺传承面临断层风险
• 机械化生产对传统工艺的冲击

🔧 解决措施：
• 开展非遗进校园活动
• 建立传承人培养机制
• 推动创新融合发展`;
    }

   

        // 创建助手UI
        this.createUI();
        this.setupEventListeners();
    }

    // 创建助手界面
    createUI() {
        // 创建浮动按钮
        this.aiButton = document.createElement('div');
        this.aiButton.id = 'palace-lantern-ai-button';
        this.aiButton.innerHTML = '<i class="fas fa-robot"></i>';
        document.body.appendChild(this.aiButton);

        // 创建聊天窗口
        this.chatWindow = document.createElement('div');
        this.chatWindow.id = 'palace-lantern-chat-window';
        this.chatWindow.innerHTML = `
      <div class="chat-header">
        <h3>宫灯文化助手</h3>
        <button id="close-chat"><i class="fas fa-times"></i></button>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="message bot-message">
          您好！我是宫灯文化助手，可以回答关于藁城宫灯的历史、工艺、文化等方面的问题。
        </div>
      </div>
      <div class="chat-input">
        <input type="text" id="user-input" placeholder="输入您的问题...">
        <button id="send-message"><i class="fas fa-paper-plane"></i></button>
      </div>
      <div class="quick-questions">
        <div class="quick-question" data-question="宫灯的历史渊源">历史渊源</div>
        <div class="quick-question" data-question="宫灯的制作工艺">制作工艺</div>
        <div class="quick-question" data-question="宫灯的主要种类">主要种类</div>
        <div class="quick-question" data-question="宫灯的文化意义">文化意义</div>
      </div>
    `;
        document.body.appendChild(this.chatWindow);

        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
      #palace-lantern-ai-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(to right, #c62828, #8b0000);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: all 0.3s;
      }
      
      #palace-lantern-ai-button:hover {
        transform: scale(1.1);
      }
      
      #palace-lantern-chat-window {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 350px;
        height: 450px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        z-index: 1000;
        overflow: hidden;
        display: none;
      }
      
      .chat-header {
        background: linear-gradient(to right, #c62828, #8b0000);
        color: white;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .chat-header h3 {
        margin: 0;
        font-size: 1.2rem;
      }
      
      .chat-header button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1.2rem;
      }
      
      .chat-messages {
        flex: 1;
        padding: 15px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      
      .message {
        max-width: 80%;
        padding: 10px 15px;
        border-radius: 18px;
      }
      
      .bot-message {
        align-self: flex-start;
        background: #f0f0f0;
        border-bottom-left-radius: 5px;
      }
      
      .user-message {
        align-self: flex-end;
        background: #c62828;
        color: white;
        border-bottom-right-radius: 5px;
      }
      
      .chat-input {
        display: flex;
        padding: 15px;
        border-top: 1px solid #eee;
      }
      
      .chat-input input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 20px;
      }
      
      .chat-input button {
        background: #c62828;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-left: 10px;
        cursor: pointer;
      }
      
      .quick-questions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0 15px 15px;
      }
      
      .quick-question {
        background: #ffebee;
        border: 1px solid #c62828;
        color: #8b0000;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s;
      }
      
      .quick-question:hover {
        background: #c62828;
        color: white;
      }
      
      @media (max-width: 480px) {
        #palace-lantern-chat-window {
          width: 100%;
          right: 0;
          bottom: 70px;
          height: calc(100vh - 70px);
          border-radius: 10px 10px 0 0;
        }
      }
    `;
        document.head.appendChild(style);
    }

    // 设置事件监听
    setupEventListeners() {
        // 按钮点击事件
        this.aiButton.addEventListener('click', () => {
            this.chatWindow.style.display = 'flex';
        });

        // 关闭按钮
        document.getElementById('close-chat').addEventListener('click', () => {
            this.chatWindow.style.display = 'none';
        });

        // 发送消息
        document.getElementById('send-message').addEventListener('click', () => {
            this.sendMessage();
        });

        // 回车发送
        document.getElementById('user-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // 快捷问题
        document.querySelectorAll('.quick-question').forEach(button => {
            button.addEventListener('click', () => {
                const question = button.getAttribute('data-question');
                this.addMessage(question, 'user');
                this.getAnswer(question);
            });
        });
    }

    // 发送消息
    sendMessage() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();

        if (message) {
            this.addMessage(message, 'user');
            this.getAnswer(message);
            input.value = '';
        }
    }

    // 添加消息到聊天窗口
    addMessage(text, sender) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    // 获取答案
    getAnswer(question) {
        // 简单关键词匹配
        const keywords = Object.keys(this.knowledgeBase);
        const matchedKeyword = keywords.find(keyword =>
            question.toLowerCase().includes(keyword.toLowerCase())
        );

        // 模拟AI思考延迟
        setTimeout(() => {
            if (matchedKeyword && this.knowledgeBase[matchedKeyword]) {
                this.addMessage(this.knowledgeBase[matchedKeyword], 'bot');
            } else {
                this.addMessage("抱歉，我暂时无法回答这个问题。您可以尝试询问关于宫灯的历史、工艺、种类、产业或文化方面的问题。", 'bot');
            }
        }, 500);
    }
}

// 初始化助手
document.addEventListener('DOMContentLoaded', () => {
    new PalaceLanternAI();
});

