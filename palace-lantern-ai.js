// palace-lantern-ai.js
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
            "能介绍一下藁城宫灯吗":"藁城宫灯是河北省石家庄市藁城区著名的传统手工艺品，也是河北省的非物质文化遗产。它起源于东汉、盛于隋唐，因历史上曾进贡宫廷而得名"宫灯"。\n" +
                "🏮 历史与传说\n" +
                "关于藁城宫灯的得名，流传着与清代乾隆皇帝相关的传说。据说乾隆皇帝南巡时，见到藁城工匠制作的灯笼工艺精湛，便命人挑选数盏带回宫中悬挂，"宫灯"之名由此流传开来。\n" +
                "🔧 工艺与特点\n" +
                "传统的藁城宫灯制作工艺十分复杂，多达56道工序，包括挖竹篾、洗竹竿、钻座眼儿等。宫灯的造型以椭圆形为主，结构上撑合自如，易于保存。\n" +
                "💡 主要种类\n" +
                "藁城宫灯发展至今已形成众多品种，主要有五大系列：红纱灯、木雕宫灯、走马灯、大型电动彩灯和工艺纸雕宫灯。\n" +
                "🌟 现代发展与文化意义\n" +
                "如今，藁城宫灯已实现了机械化、规模化生产，产品不仅占据国内大部分市场，还远销海外。宫灯象征着红红火火、吉祥喜庆，是中国人春节记忆中不可或缺的视觉符号。",
            "藁城宫灯的起源可以追溯到哪个朝代？其最初的设计灵感或用途是什么？":"根据藁城宫灯的历史记载，其起源可以追溯到东汉时期。相传光武帝刘秀的皇后郭圣通是藁城人，她入宫后组织家乡手艺人建立手工作坊，所制作的灯笼专供宫廷和军营使用，屯头村的灯笼作坊就是其中代表。最初的设计灵感源于宫廷照明和庆典需求，用途主要是为皇室和军队提供照明装饰，体现了尊贵与吉祥的象征意义。",
            "传统藁城宫灯在制作工艺上有哪些核心步骤？这些步骤中最能体现其技艺特色的是哪一环？":"传统藁城宫灯的制作工艺包含56道核心工序，其中最能体现技艺特色的关键环节是镂空装饰。\n" +
                "1. 选材备料：精选竹材制作骨架，红纱需经过染色、上胶处理\n" +
                "2. 框架制作：挖竹篾、洗竹竿、钻座眼儿\n" +
                "3. 装饰工艺：镂空雕刻吉祥图案，制作穗坠流苏\n" +
                "镂空装饰要求匠人具备三维空间想象力和稳如磐石的手工精度，每平方厘米需雕刻10-15个镂空点，刀工误差不能超过0.5毫米，图案需保证从360°任意角度观看都呈现完整对称造型。",
            "藁城宫灯与其他地区的宫灯（如北京宫灯、南京宫灯）相比，在造型、纹饰和文化内涵上有哪些显著区别？":"藁城宫灯与其他地区宫灯的显著区别：\n" +
                "1. 造型：藁城宫灯以椭圆形为主，强调上盖下托结构；北京宫灯多为六角或八角形，层次繁复；南京宫灯偏纤秀轻盈\n" +
                "2. 纹饰：藁城宫灯以北方民间吉祥纹样为主；北京宫灯用皇家御用纹样；南京宫灯多江南文人题材\n" +
                "3. 文化：藁城宫灯代表北方民间文化；北京宫灯体现皇家礼制；南京宫灯融合六朝文脉与秦淮风情",
            "藁城宫灯在历史发展中经历过哪些重要的演变？是否融入过不同时代的文化元素？":"藁城宫灯的历史演变：\n" +
                "1. 东汉起源：专供宫廷使用\n" +
                "2. 隋唐兴盛：传入民间，技术成熟\n" +
                "3. 明清发展：成为贡品，工艺标准化\n" +
                "4. 近现代转型：机械化生产\n" +
                "5. 当代国际化：参与奥运会、世博会等\n" +
                "文化融合：\n" +
                "- 唐代吸收宝相花、缠枝纹等华丽图案\n" +
                "- 宋代融入梅兰竹菊等雅致题材\n" +
                "- 现代与剪纸艺术、AR技术等结合",
            "作为非物质文化遗产藁城宫灯目前的传承现状如何？有哪些代表性的传承人和传承方式？":"藁城宫灯传承现状：\n" +
                "1. 生产规模化：年产量超1亿对，占全国80%市场\n" +
                "2. 技艺创新化：部分工序机械化，开发新品类\n" +
                "3. 保护体系化：2007年列入省级非遗，建立博物馆\n" +
                "代表传承人：\n" +
                "- 李师傅家族：世代相传，坚守手工技艺\n" +
                "- 张守义：研发纸雕宫灯技术\n" +
                "- 王翠敏：设计冬奥会特许商品\n" +
                "传承方式：教育传承、文旅融合、数字化保护",
            "藁城宫灯在当地的民俗活动中扮演着怎样的角色？除了春节，还有哪些场合会悬挂或使用它？":"藁城宫灯在民俗活动中的角色：\n" +
                "1. 节庆仪式载体：春节/元宵节悬挂，象征团圆\n" +
                "2. 文化身份标识：婚嫁陪嫁品，寓意"前途光明"\n" +
                "3. 经济社交纽带：家庭收入来源，馈赠礼品\n" +
                "使用场合：\n" +
                "- 生命礼仪：婚礼、寿诞、新生儿满月\n" +
                "- 官方盛事：政府会议、城市亮化\n" +
                "- 国际交流：外交礼物、文化展览",
            "藁城宫灯的经典款式有哪些？这些款式的命名是否有对应的寓意或故事？":"经典款式及寓意：\n" +
                "1. 红纱灯：红色象征喜庆团圆，源自汉代宫廷\n" +
                "2. 木雕宫灯：雕刻"松鹤延年"喻长寿\n" +
                "3. 走马灯：旋转象征"时来运转"\n" +
                "4. 工艺纸雕宫灯：融合剪纸艺术，获国家专利\n" +
                "5. 大型电动彩灯：用于城市广场，展现现代创新\n" +
                "命名多含吉祥谐音（如"鹿灯"谐"禄"）或历史典故",
            "制作一盏传统的藁城宫灯，从备料到成品通常需要多长时间？对制作者的技艺有哪些具体要求？":"制作时间：\n" +
                "- 手工制作：5-7天（56道工序）\n" +
                "- 机械辅助：2-3天\n" +
                "技艺要求：\n" +
                "1. 材料处理：精通竹材特性，熟练劈篾、弯曲\n" +
                "2. 造型结构：精准榫卯工艺，空间想象力\n" +
                "3. 艺术装饰：掌握传统纹样绘画，镂空雕刻\n" +
                "4. 核心技艺：上盖下托、镂空装饰、穗坠制作",
            "如今藁城宫灯在产业化发展中面临哪些机遇和挑战？是否开发出了符合现代审美的创新产品？":"产业化发展：\n" +
                "机遇：\n" +
                "- 政策支持：列为非遗重点保护项目\n" +
                "- 市场需求：国潮兴起，礼品市场扩容\n" +
                "- 渠道变革：电商直播打破地域限制\n" +
                "挑战：\n" +
                "- 手工传承与规模化矛盾\n" +
                "- 市场竞争与成本压力\n" +
                "创新产品：\n" +
                "- 极简几何宫灯\n" +
                "- 国潮联名款\n" +
                "- 智能交互宫灯\n" +
                "- AR纸雕宫灯"
        };

        this.createUI();
        this.setupEventListeners();
    }

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
        
        // 将聊天窗口插入到页面主内容区
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.insertBefore(this.chatWindow, mainContent.firstChild);
        } else {
            document.body.appendChild(this.chatWindow);
        }

        this.addStyles();
    }

    addStyles() {
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
                width: 100%;
                max-width: 100%;
                background: white;
                border-radius: 8px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                margin: 20px 0;
                border-top: 4px solid #c62828;
                overflow: hidden;
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
                height: 300px;
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
                word-wrap: break-word;
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
                outline: none;
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
            
            @media (max-width: 768px) {
                #palace-lantern-chat-window {
                    margin: 10px 0;
                }
                
                .chat-messages {
                    height: 250px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // 按钮点击事件
        this.aiButton.addEventListener('click', () => {
            this.chatWindow.scrollIntoView({ behavior: 'smooth' });
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

    sendMessage() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();

        if (message) {
            this.addMessage(message, 'user');
            this.getAnswer(message);
            input.value = '';
        }
    }

    addMessage(text, sender) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

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

    getModernDevelopment() {
        return `藁城宫灯的现代发展：

🚀 创新方向：
1. 产品创新
   - 工艺纸雕宫灯：融合剪纸艺术
   - 智能交互宫灯：内置LED变色灯珠
   - AR宫灯：扫描触发动画效果

2. 技术创新
   - 3D打印技术复刻传统构件
   - 激光雕刻提高生产效率
   - 环保材料应用

3. 营销创新
   - 电商直播带货
   - 文创IP开发
   - 文旅体验项目

🏆 重要成就：
• 2008年北京奥运会特许商品
• 2010年上海世博会特许商品
• 2022年北京冬奥会特许商品`;
    }

    getComparison() {
        return `藁城宫灯与其他地区宫灯的比较：

🏮 北京宫灯：
• 特点：宫廷风格，紫檀木框架，珐琅装饰
• 用途：高端场合陈列，外交礼品
• 文化：体现皇家审美

🏮 南京宫灯：
• 特点：江南风格，竹编工艺，薄绢灯罩
• 用途：秦淮灯会，文人雅士装饰
• 文化：融合六朝文脉

🏮 藁城宫灯：
• 特点：民间工艺，红纱罩面，镂空雕刻
• 用途：节庆装饰，日常生活
• 文化：代表北方民间艺术

总结：藁城宫灯更贴近民间生活，产业化程度最高，而北京宫灯更显皇家气派，南京宫灯更具文人气息。`;
    }

    getProductionTime() {
        return `制作一盏传统藁城宫灯的时间要求：

⏳ 手工制作：
• 完整56道工序：5-7天
• 核心工序（骨架+装饰）：3-4天
• 简单款式：2-3天

⚙️ 机械辅助：
• 半机械化生产：1-2天
• 批量生产：每天可完成数百件

🛠️ 影响时间的因素：
1. 工艺复杂度：镂空雕刻最耗时
2. 工匠熟练度：老师傅可节省30%时间
3. 材料准备：竹材需提前处理
4. 天气条件：湿度影响干燥速度`;
    }

    // === UI 创建与交互 ===
    
    createUI() {
        // 创建内嵌式聊天窗口
        this.chatWindow = document.createElement('div');
        this.chatWindow.id = 'palace-lantern-chat-window';
        this.chatWindow.innerHTML = `
            <div class="chat-header">
                <h3>宫灯文化助手</h3>
                <button id="minimize-chat"><i class="fas fa-window-minimize"></i></button>
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
        
        // 将聊天窗口插入到页面中
        const targetElement = document.querySelector('.main-content') || document.body;
        targetElement.appendChild(this.chatWindow);

        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #palace-lantern-chat-window {
                width: 100%;
                height: 500px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                margin: 30px 0;
                border-top: 4px solid #c62828;
                overflow: hidden;
            }
            
            .chat-header {
                background: linear-gradient(to right, #c62828, #8b0000);
                color: white;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
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
                word-wrap: break-word;
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
                outline: none;
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
            
            /* 最小化状态 */
            .minimized {
                height: 60px !important;
            }
            
            .minimized .chat-messages,
            .minimized .chat-input,
            .minimized .quick-questions {
                display: none !important;
            }
            
            @media (max-width: 768px) {
                #palace-lantern-chat-window {
                    height: 400px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // 最小化/恢复功能
        const chatHeader = this.chatWindow.querySelector('.chat-header');
        const minimizeBtn = document.getElementById('minimize-chat');
        
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimize();
        });
        
        chatHeader.addEventListener('click', () => {
            if (this.chatWindow.classList.contains('minimized')) {
                this.toggleMinimize();
            }
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

    toggleMinimize() {
        this.chatWindow.classList.toggle('minimized');
        const icon = document.getElementById('minimize-chat').querySelector('i');
        if (this.chatWindow.classList.contains('minimized')) {
            icon.className = 'fas fa-window-maximize';
        } else {
            icon.className = 'fas fa-window-minimize';
        }
    }

    sendMessage() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();

        if (message) {
            this.addMessage(message, 'user');
            this.getAnswer(message);
            input.value = '';
        }
    }

    addMessage(text, sender) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    getAnswer(question) {
        // 增强的智能匹配逻辑
        const keywords = Object.keys(this.knowledgeBase);
        let matchedKeyword = null;

        // 优先完全匹配
        matchedKeyword = keywords.find(keyword => 
            question.toLowerCase().includes(keyword.toLowerCase())
        );

        // 如果完全匹配失败，尝试关键词匹配
        if (!matchedKeyword) {
            const questionWords = question.toLowerCase().split(' ');
            for (let word of questionWords) {
                if (word.length > 1) { // 忽略单字
                    const found = keywords.find(keyword => 
                        keyword.toLowerCase().includes(word)
                    );
                    if (found) {
                        matchedKeyword = found;
                        break;
                    }
                }
            }
        }

        // 模拟AI思考延迟
        setTimeout(() => {
            if (matchedKeyword && this.knowledgeBase[matchedKeyword]) {
                this.addMessage(this.knowledgeBase[matchedKeyword], 'bot');
            } else {
                this.addMessage("您好！我可以为您介绍藁城宫灯的：\n• 历史渊源和发展历程\n• 制作工艺和特色技术\n• 种类分类和特点\n• 文化内涵和象征意义\n• 产业发展现状\n\n请告诉我您想了解哪个方面？", 'bot');
            }
        }, 500);
    }
}

// 初始化助手
document.addEventListener('DOMContentLoaded', () => {
    new PalaceLanternAI();
});    getCraftsmanship() {
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

    getModernDevelopment() {
        return `藁城宫灯的现代发展：

🚀 创新方向：
1. 产品创新
   - 工艺纸雕宫灯：融合剪纸艺术
   - 智能交互宫灯：内置LED变色灯珠
   - AR宫灯：扫描触发动画效果

2. 技术创新
   - 3D打印技术复刻传统构件
   - 激光雕刻提高生产效率
   - 环保材料应用

3. 营销创新
   - 电商直播带货
   - 文创IP开发
   - 文旅体验项目

🏆 重要成就：
• 2008年北京奥运会特许商品
• 2010年上海世博会特许商品
• 2022年北京冬奥会特许商品`;
    }

    getComparison() {
        return `藁城宫灯与其他地区宫灯的比较：

🏮 北京宫灯：
• 特点：宫廷风格，紫檀木框架，珐琅装饰
• 用途：高端场合陈列，外交礼品
• 文化：体现皇家审美

🏮 南京宫灯：
• 特点：江南风格，竹编工艺，薄绢灯罩
• 用途：秦淮灯会，文人雅士装饰
• 文化：融合六朝文脉

🏮 藁城宫灯：
• 特点：民间工艺，红纱罩面，镂空雕刻
• 用途：节庆装饰，日常生活
• 文化：代表北方民间艺术

总结：藁城宫灯更贴近民间生活，产业化程度最高，而北京宫灯更显皇家气派，南京宫灯更具文人气息。`;
    }

    getProductionTime() {
        return `制作一盏传统藁城宫灯的时间要求：

⏳ 手工制作：
• 完整56道工序：5-7天
• 核心工序（骨架+装饰）：3-4天
• 简单款式：2-3天

⚙️ 机械辅助：
• 半机械化生产：1-2天
• 批量生产：每天可完成数百件

🛠️ 影响时间的因素：
1. 工艺复杂度：镂空雕刻最耗时
2. 工匠熟练度：老师傅可节省30%时间
3. 材料准备：竹材需提前处理
4. 天气条件：湿度影响干燥速度`;
    }

    // === UI 创建与交互 ===
    
    createUI() {
        // 创建内嵌式聊天窗口
        this.chatWindow = document.createElement('div');
        this.chatWindow.id = 'palace-lantern-chat-window';
        this.chatWindow.innerHTML = `
            <div class="chat-header">
                <h3>宫灯文化助手</h3>
                <button id="minimize-chat"><i class="fas fa-window-minimize"></i></button>
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
        
        // 将聊天窗口插入到页面中
        const targetElement = document.querySelector('.main-content') || document.body;
        targetElement.appendChild(this.chatWindow);

        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #palace-lantern-chat-window {
                width: 100%;
                height: 500px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                margin: 30px 0;
                border-top: 4px solid #c62828;
                overflow: hidden;
            }
            
            .chat-header {
                background: linear-gradient(to right, #c62828, #8b0000);
                color: white;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
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
                word-wrap: break-word;
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
                outline: none;
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
            
            /* 最小化状态 */
            .minimized {
                height: 60px !important;
            }
            
            .minimized .chat-messages,
            .minimized .chat-input,
            .minimized .quick-questions {
                display: none !important;
            }
            
            @media (max-width: 768px) {
                #palace-lantern-chat-window {
                    height: 400px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // 最小化/恢复功能
        const chatHeader = this.chatWindow.querySelector('.chat-header');
        const minimizeBtn = document.getElementById('minimize-chat');
        
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimize();
        });
        
        chatHeader.addEventListener('click', () => {
            if (this.chatWindow.classList.contains('minimized')) {
                this.toggleMinimize();
            }
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

    toggleMinimize() {
        this.chatWindow.classList.toggle('minimized');
        const icon = document.getElementById('minimize-chat').querySelector('i');
        if (this.chatWindow.classList.contains('minimized')) {
            icon.className = 'fas fa-window-maximize';
        } else {
            icon.className = 'fas fa-window-minimize';
        }
    }

    sendMessage() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();

        if (message) {
            this.addMessage(message, 'user');
            this.getAnswer(message);
            input.value = '';
        }
    }

    addMessage(text, sender) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    getAnswer(question) {
        // 增强的智能匹配逻辑
        const keywords = Object.keys(this.knowledgeBase);
        let matchedKeyword = null;

        // 优先完全匹配
        matchedKeyword = keywords.find(keyword => 
            question.toLowerCase().includes(keyword.toLowerCase())
        );

        // 如果完全匹配失败，尝试关键词匹配
        if (!matchedKeyword) {
            const questionWords = question.toLowerCase().split(' ');
            for (let word of questionWords) {
                if (word.length > 1) { // 忽略单字
                    const found = keywords.find(keyword => 
                        keyword.toLowerCase().includes(word)
                    );
                    if (found) {
                        matchedKeyword = found;
                        break;
                    }
                }
            }
        }

        // 模拟AI思考延迟
        setTimeout(() => {
            if (matchedKeyword && this.knowledgeBase[matchedKeyword]) {
                this.addMessage(this.knowledgeBase[matchedKeyword], 'bot');
            } else {
                this.addMessage("您好！我可以为您介绍藁城宫灯的：\n• 历史渊源和发展历程\n• 制作工艺和特色技术\n• 种类分类和特点\n• 文化内涵和象征意义\n• 产业发展现状\n\n请告诉我您想了解哪个方面？", 'bot');
            }
        }, 500);
    }
}

// 初始化助手
document.addEventListener('DOMContentLoaded', () => {
    new PalaceLanternAI();
});


