// palace-lantern-ai.js
class PalaceLanternAI {
    constructor() {
        // 宫灯知识库
        this.knowledgeBase = {
            "历史": `藁城宫灯制作历史可追溯至东汉时期，由纱罩灯衍变而来。相传光武帝刘秀的皇后郭圣通是藁城人，入宫后将家乡的手艺人组织起来，建立各种手工作坊，所制产品专供宫内及军营所用，其中灯笼作坊就在屯头村。`,
            
            "工艺": `传统藁城宫灯都是手工制作，共有56道工序，包括挖竹篾、洗竹竿、钻座眼儿等。从造型上看，藁城宫灯有三个特点：上盖下托、镂空装饰、穗坠（流苏）。`,
            
            "种类": `藁城宫灯已发展到工艺纸雕宫灯、传统宫灯、大型电动宫灯三大系列，300多个品种，包括红纱灯、木雕宫灯、走马灯、工艺纸雕宫灯等。`,
            
            "产业": `屯头村被称为"中国宫灯第一村"，年产量突破1亿对，年产值20亿元，产品行销全国各地，且出口俄罗斯、韩国、日本等十余个国家和地区。`,
            
            "文化": `2007年，藁城宫灯被列入河北省非物质文化遗产名录。曾参与1997年香港回归、2008年北京奥运会、2010年上海世博会、2022年北京冬奥会等重大活动。`,
            
            "介绍": `藁城宫灯是河北省石家庄市藁城区著名的传统手工艺品，始于东汉、盛于隋唐，因进贡宫廷故名"宫灯"。具有浓厚的地方特色，以"屯头宫灯"为代表，以造型优美、易于保存等特点驰名中外。`,
            
            "你好": `您好！我是宫灯文化助手，专门为您介绍藁城宫灯的历史、工艺、文化等方面的问题。有什么我可以帮助您的吗？😊`,
            
            "起源": `根据历史记载，藁城宫灯的起源可以追溯到东汉时期。相传光武帝刘秀的皇后郭圣通是藁城人，她入宫后组织家乡手艺人建立手工作坊，所制作的灯笼专供宫廷和军营使用。`,
            
            "制作步骤": `传统藁城宫灯制作包含56道工序：选材备料、骨架制作、装饰工艺、组装调试。每道工序都要求匠人具备精湛的技艺和丰富的经验。`,
            
            "特色": `藁城宫灯的主要特色：上盖下托结构、镂空装饰工艺、穗坠流苏设计。这些特色体现了中国传统工艺的美学智慧和实用价值。`
        };

        this.isChatVisible = false;
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
        this.chatWindow.style.display = 'none';
        
        this.chatWindow.innerHTML = `
            <div class="chat-header">
                <h3><i class="fas fa-robot"></i> 宫灯文化助手</h3>
                <button id="close-chat"><i class="fas fa-times"></i></button>
            </div>
            <div class="chat-messages" id="chat-messages">
                <div class="message bot-message">
                    <div class="message-content">
                        您好！我是宫灯文化助手，可以为您介绍藁城宫灯的历史渊源、制作工艺、文化意义等内容。
                        <div class="message-time">刚刚</div>
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" id="user-input" placeholder="输入您关于宫灯的问题...">
                <button id="send-message"><i class="fas fa-paper-plane"></i></button>
            </div>
            <div class="quick-questions">
                <div class="quick-question" data-question="历史渊源">🏮 历史渊源</div>
                <div class="quick-question" data-question="制作工艺">🔧 制作工艺</div>
                <div class="quick-question" data-question="主要种类">📦 主要种类</div>
                <div class="quick-question" data-question="文化意义">🎎 文化意义</div>
            </div>
        `;
        
        // 插入到互动体验部分之前
        const interactionSection = document.querySelector('.interaction-section');
        if (interactionSection) {
            interactionSection.parentNode.insertBefore(this.chatWindow, interactionSection);
        } else {
            document.body.appendChild(this.chatWindow);
        }

        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 浮动按钮样式 */
            #palace-lantern-ai-button {
                position: fixed;
                bottom: 100px;
                right: 20px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #c62828, #8b0000);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(198, 40, 40, 0.3);
                z-index: 10000;
                transition: all 0.3s ease;
                border: 2px solid white;
            }
            
            #palace-lantern-ai-button:hover {
                transform: scale(1.1) rotate(10deg);
                box-shadow: 0 6px 20px rgba(198, 40, 40, 0.5);
            }
            
            /* 聊天窗口样式 */
            #palace-lantern-chat-window {
                width: 100%;
                background: white;
                border-radius: 10px;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
                margin: 25px 0;
                border: 1px solid #e0e0e0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            
            .chat-header {
                background: linear-gradient(to right, #c62828, #8b0000);
                color: white;
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid #ffd700;
            }
            
            .chat-header h3 {
                margin: 0;
                font-size: 1.3rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .chat-header button {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            }
            
            .chat-header button:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: rotate(90deg);
            }
            
            .chat-messages {
                height: 350px;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
                background: #f8f9fa;
            }
            
            .message {
                max-width: 85%;
                padding: 12px 18px;
                border-radius: 18px;
                word-wrap: break-word;
                position: relative;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .bot-message {
                align-self: flex-start;
                background: white;
                border-bottom-left-radius: 5px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #c62828;
            }
            
            .user-message {
                align-self: flex-end;
                background: linear-gradient(135deg, #c62828, #d32f2f);
                color: white;
                border-bottom-right-radius: 5px;
                box-shadow: 0 2px 8px rgba(198, 40, 40, 0.3);
            }
            
            .message-content {
                line-height: 1.5;
            }
            
            .message-time {
                font-size: 0.75rem;
                opacity: 0.7;
                margin-top: 5px;
                text-align: right;
            }
            
            .chat-input {
                display: flex;
                padding: 20px;
                border-top: 1px solid #e0e0e0;
                background: white;
            }
            
            .chat-input input {
                flex: 1;
                padding: 12px 20px;
                border: 2px solid #e0e0e0;
                border-radius: 25px;
                outline: none;
                font-size: 1rem;
                transition: all 0.3s;
            }
            
            .chat-input input:focus {
                border-color: #c62828;
                box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.1);
            }
            
            .chat-input button {
                background: #c62828;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                margin-left: 15px;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
            }
            
            .chat-input button:hover {
                background: #b71c1c;
                transform: scale(1.05);
            }
            
            .quick-questions {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                padding: 20px;
                background: #f8f9fa;
                border-top: 1px solid #e0e0e0;
            }
            
            .quick-question {
                background: white;
                border: 2px solid #c62828;
                color: #c62828;
                padding: 10px 18px;
                border-radius: 20px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .quick-question:hover {
                background: #c62828;
                color: white;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(198, 40, 40, 0.3);
            }
            
            /* 滚动条样式 */
            .chat-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            .chat-messages::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 3px;
            }
            
            .chat-messages::-webkit-scrollbar-thumb {
                background: #c62828;
                border-radius: 3px;
            }
            
            .chat-messages::-webkit-scrollbar-thumb:hover {
                background: #b71c1c;
            }
            
            /* 移动端适配 */
            @media (max-width: 768px) {
                #palace-lantern-ai-button {
                    bottom: 80px;
                    right: 15px;
                    width: 55px;
                    height: 55px;
                    font-size: 1.3rem;
                }
                
                #palace-lantern-chat-window {
                    margin: 15px 0;
                    border-radius: 8px;
                }
                
                .chat-messages {
                    height: 300px;
                    padding: 15px;
                }
                
                .chat-input {
                    padding: 15px;
                }
                
                .quick-questions {
                    padding: 15px;
                    gap: 10px;
                }
                
                .quick-question {
                    padding: 8px 15px;
                    font-size: 0.85rem;
                }
            }
            
            @media (max-width: 480px) {
                #palace-lantern-ai-button {
                    bottom: 70px;
                    right: 10px;
                    width: 50px;
                    height: 50px;
                }
                
                .chat-header h3 {
                    font-size: 1.1rem;
                }
                
                .message {
                    max-width: 90%;
                    padding: 10px 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // 浮动按钮点击事件
        this.aiButton.addEventListener('click', () => {
            this.toggleChatWindow();
        });

        // 关闭按钮
        document.getElementById('close-chat').addEventListener('click', () => {
            this.hideChatWindow();
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

        // 点击外部关闭
        document.addEventListener('click', (e) => {
            if (this.isChatVisible && 
                !this.chatWindow.contains(e.target) && 
                !this.aiButton.contains(e.target)) {
                this.hideChatWindow();
            }
        });
    }

    toggleChatWindow() {
        this.isChatVisible = !this.isChatVisible;
        this.chatWindow.style.display = this.isChatVisible ? 'flex' : 'none';
        
        if (this.isChatVisible) {
            this.chatWindow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            document.getElementById('user-input').focus();
        }
    }

    hideChatWindow() {
        this.isChatVisible = false;
        this.chatWindow.style.display = 'none';
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
        
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0');
        
        messageDiv.innerHTML = `
            <div class="message-content">
                ${text}
                <div class="message-time">${timeStr}</div>
            </div>
        `;
        
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    getAnswer(question) {
        // 智能匹配逻辑
        const keywords = Object.keys(this.knowledgeBase);
        let matchedKeyword = null;
        let bestMatchScore = 0;

        // 计算匹配度
        keywords.forEach(keyword => {
            const score = this.calculateMatchScore(question.toLowerCase(), keyword.toLowerCase());
            if (score > bestMatchScore) {
                bestMatchScore = score;
                matchedKeyword = keyword;
            }
        });

        // 模拟AI思考延迟
        setTimeout(() => {
            if (matchedKeyword && bestMatchScore > 0.3) {
                this.addMessage(this.knowledgeBase[matchedKeyword], 'bot');
            } else {
                this.addMessage("您好！我可以为您介绍藁城宫灯的以下内容：\n\n• 🏮 历史渊源与发展历程\n• 🔧 制作工艺与特色技术\n• 📦 种类分类与特点\n• 🎎 文化内涵与象征意义\n• 💼 产业发展现状\n\n请告诉我您想了解哪个方面？", 'bot');
            }
        }, 800 + Math.random() * 500); // 随机延迟，更自然
    }

    calculateMatchScore(question, keyword) {
        if (question.includes(keyword)) {
            return 1; // 完全匹配
        }
        
        // 部分匹配计算
        const questionWords = question.split('');
        const keywordWords = keyword.split('');
        
        let matchCount = 0;
        keywordWords.forEach(word => {
            if (question.includes(word)) {
                matchCount++;
            }
        });
        
        return matchCount / keywordWords.length;
    }
}

// 初始化助手
document.addEventListener('DOMContentLoaded', () => {
    // 等待页面完全加载
    setTimeout(() => {
        new PalaceLanternAI();
        console.log('宫灯文化AI助手已初始化');
    }, 1000);
});
