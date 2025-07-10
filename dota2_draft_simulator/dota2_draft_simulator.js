
        // Game state
        const gameState = {
            currentTurn: 0,
            turnSequence: [
                'bp1', 'bp2', 'bp2', 'bp1', 'bp2', 'bp2', 'bp1', 'ep1', 
                'ep2', 'bp1', 'bp1', 'bp2', 'ep2', 'ep1', 'ep1', 'ep2', 
                'ep2', 'ep1', 'bp1', 'bp2', 'bp2', 'bp1', 'ep1', 'ep2'
            ],
            player1ReserveTime: 130, // 2:10 in seconds
            player2ReserveTime: 130,
            currentTimer: 0,
            currentTimerType: '', // 'ban' or 'pick'
            currentPlayer: '',
            isPaused: false,
            timerInterval: null,
            characters: [
            { id: 1, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png' },
            { id: 2, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png' },
            { id: 3, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png' },
            { id: 4, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png' },
            { id: 5, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png' },
            { id: 6, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png' },
            { id: 7, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png' },
            { id: 8, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png' },
            { id: 9, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png' },
            { id: 10, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png' },
            { id: 11, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png' },
            { id: 12, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png' },
            { id: 13, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png' },
            { id: 14, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png' },
            { id: 15, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png' },
            { id: 16, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png' },
            { id: 17, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png' },
            { id: 18, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png' },
            { id: 19, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png' },
            { id: 20, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png' },
            { id: 21, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png' },
            { id: 22, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png' },
            { id: 23, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png' },
            { id: 24, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png' },
            { id: 25, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png' },
            { id: 26, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png' },
            { id: 27, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png' },
            { id: 28, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png' },
            { id: 29, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png' },
            { id: 30, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png' },
            { id: 31, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png' },
            { id: 32, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png' },
            { id: 33, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png' },
            { id: 34, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png' },
            { id: 35, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png' },
            { id: 36, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png' },
            { id: 37, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png' },
            { id: 38, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png' },
            { id: 39, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png' },
            { id: 40, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png' },
            { id: 41, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png' },
            { id: 42, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png' },
            { id: 43, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png' },
            { id: 44, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png' },
            { id: 45, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png' },
            { id: 46, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png' },
            { id: 47, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png' },
            { id: 48, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png' },
            { id: 49, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png' },
            { id: 50, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png' },
            { id: 51, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png' },
            { id: 52, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png' },
            { id: 53, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png' },
            { id: 54, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png' },
            { id: 55, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png' },
            { id: 56, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png' },
            { id: 57, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png' },
            { id: 58, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png' },
            { id: 59, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png' },
            { id: 60, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png' },
            { id: 61, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png' },
            { id: 62, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png' },
            { id: 63, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png' },
            { id: 64, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png' },
            { id: 65, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png' },
            { id: 66, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png' },
            { id: 67, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png' },
            { id: 68, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png' },
            { id: 69, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png' },
            { id: 70, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png' },
            { id: 71, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png' },
            { id: 72, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png' },
            { id: 73, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png' },
            { id: 74, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png' },
            { id: 75, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png' },
            { id: 76, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png' },
            { id: 77, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png' },
            { id: 78, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png' },
            { id: 79, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png' },
            { id: 80, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png' },
            { id: 81, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png' },
            { id: 82, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png' },
            { id: 83, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png' },
            { id: 84, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png' },
            { id: 85, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png' },
            { id: 86, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png' },
            { id: 87, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png' },
            { id: 88, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png' },
            { id: 89, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png' },
            { id: 90, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png' },
            { id: 91, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png' },
            { id: 92, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png' },
            { id: 93, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png' },
            { id: 94, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png' },
            { id: 95, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png' },
            { id: 96, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png' },
            { id: 97, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png' },
            { id: 98, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png' },
            { id: 99, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png' },
            { id: 100, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png' },
            { id: 101, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png' },
            { id: 102, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png' },
            { id: 103, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png' },
            { id: 104, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png' },
            { id: 105, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png' },
            { id: 106, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png' },
            { id: 107, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png' },
            { id: 108, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png' },
            { id: 109, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png' },
            { id: 110, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png' },
            { id: 111, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png' },
            { id: 112, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png' },
            { id: 113, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png' },
            { id: 114, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png' },
            { id: 115, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png' },
            { id: 116, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png' },
            { id: 117, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png' },
            { id: 118, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png' },
            { id: 119, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' },
            { id: 120, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png' },
            { id: 121, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png' },
            { id: 122, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png' },
            { id: 123, banned: false, selectedBy: null, imgUrl: 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png' }
            ],
            history: []
        };


        const charactersGrid = document.getElementById('charactersGrid');
        const historyPanel = document.getElementById('historyPanel');
        const player1TimerDisplay = document.querySelector('#player1Timer .time-display');
        const player2TimerDisplay = document.querySelector('#player2Timer .time-display');
        const currentTimerLabel = document.getElementById('currentTimerLabel');
        const currentTimeDisplay = document.getElementById('currentTimeDisplay');
        const pauseBtn = document.getElementById('pauseBtn');
        const resetBtn = document.getElementById('resetBtn');
        const gameOverDisplay = document.getElementById('gameOver');

        
        function initGame() {
            
            charactersGrid.innerHTML = '';
            gameState.characters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.dataset.id = character.id;
                
                const img = document.createElement('img');
                img.src = character.imgUrl;
                img.alt = `Character ${character.id}`;
                
                card.appendChild(img);
                card.addEventListener('click', () => handleCharacterClick(character.id));
                charactersGrid.appendChild(card);
                
                updateCharacterCard(character.id);
            });

            
            historyPanel.innerHTML = '';
            for (let i = 1; i <= 24; i++) {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.dataset.turn = i;
                
                const numberSpan = document.createElement('span');
                numberSpan.className = 'history-item-number';
                numberSpan.textContent = i;
                
                const contentDiv = document.createElement('div');
                contentDiv.className = 'history-item-content';
                
                historyItem.appendChild(numberSpan);
                historyItem.appendChild(contentDiv);
                historyPanel.appendChild(historyItem);
            }

            
            startNextTurn();
        }

        
        function updateCharacterCard(characterId) {
            const character = gameState.characters.find(c => c.id === characterId);
            const card = document.querySelector(`.character-card[data-id="${characterId}"]`);
            
            if (!card) return;
            
            card.classList.toggle('banned', character.banned);
            card.classList.toggle('selected', character.selectedBy !== null);
        }

        
        function startNextTurn() {
            gameState.currentTurn++;
            
            if (gameState.currentTurn > gameState.turnSequence.length) {
                endGame();
                return;
            }
            
            const currentAction = gameState.turnSequence[gameState.currentTurn - 1];
            gameState.currentPlayer = currentAction.includes('1') ? 'player1' : 'player2';
            gameState.currentTimerType = currentAction.startsWith('b') ? 'ban' : 'pick';
            
            
            gameState.currentTimer = gameState.currentTimerType === 'ban' ? 20 : 30;
            
            
            currentTimerLabel.textContent = currentAction === 'bp1' ? 'Tiempo del jugador 1 (ban)' :
                                         currentAction === 'bp2' ? 'Tiempo del jugador 2 (ban)' :
                                         currentAction === 'ep1' ? 'Tiempo del jugador 1 (pick)' :
                                         'Tiempo del jugador 2 (pick)';
            
            updateTimerDisplays();
            
            
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
            }
            
            gameState.timerInterval = setInterval(updateTimers, 1000);
        }

        
        function updateTimerDisplays() {
            
            const formatTime = (seconds) => {
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${mins}:${secs < 10 ? '0' + secs : secs}`;
            };
            
            player1TimerDisplay.textContent = formatTime(gameState.player1ReserveTime);
            player2TimerDisplay.textContent = formatTime(gameState.player2ReserveTime);
            currentTimeDisplay.textContent = formatTime(gameState.currentTimer);
        }

        
        function updateTimers() {
            if (gameState.isPaused) return;
            
            if (gameState.currentTimer > 0) {
                gameState.currentTimer--;
            } else {
                e
                if (gameState.currentPlayer === 'player1' && gameState.player1ReserveTime > 0) {
                    gameState.player1ReserveTime--;
                } else if (gameState.currentPlayer === 'player2' && gameState.player2ReserveTime > 0) {
                    gameState.player2ReserveTime--;
                } else {
                    
                    makeRandomSelection();
                    return;
                }
            }
            
            updateTimerDisplays();
            
            // Check if all time is up
            if ((gameState.currentPlayer === 'player1' && gameState.player1ReserveTime <= 0 && gameState.currentTimer <= 0) ||
                (gameState.currentPlayer === 'player2' && gameState.player2ReserveTime <= 0 && gameState.currentTimer <= 0)) {
                makeRandomSelection();
            }
        }

        // Make a random selection when time runs out
        function makeRandomSelection() {
            const availableCharacters = gameState.characters.filter(c => 
                !c.banned && c.selectedBy === null
            );
            
            if (availableCharacters.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableCharacters.length);
                const characterId = availableCharacters[randomIndex].id;
                
                if (gameState.currentTimerType === 'ban') {
                    banCharacter(characterId);
                } else {
                    selectCharacter(characterId);
                }
            } else {
                // No characters left (shouldn't happen with proper setup)
                endTurn();
            }
        }

        // Handle character click
        function handleCharacterClick(characterId) {
            const character = gameState.characters.find(c => c.id === characterId);
            
            if (character.banned || character.selectedBy !== null) {
                return; // Character already banned or selected
            }
            
            if (gameState.currentTimerType === 'ban') {
                banCharacter(characterId);
            } else {
                selectCharacter(characterId);
            }
        }

        // Ban a character
        function banCharacter(characterId) {
            const character = gameState.characters.find(c => c.id === characterId);
            character.banned = true;
            
            // Add to history
            gameState.history.push({
                turn: gameState.currentTurn,
                action: gameState.currentPlayer === 'player1' ? 'bp1' : 'bp2',
                characterId: characterId
            });
            
            updateHistory();
            updateCharacterCard(characterId);
            endTurn();
        }

        // Select a character
        function selectCharacter(characterId) {
            const character = gameState.characters.find(c => c.id === characterId);
            character.selectedBy = gameState.currentPlayer;
            
            // Add to history
            gameState.history.push({
                turn: gameState.currentTurn,
                action: gameState.currentPlayer === 'player1' ? 'ep1' : 'ep2',
                characterId: characterId
            });
            
            updateHistory();
            updateCharacterCard(characterId);
            endTurn();
        }

        // Update history display
        function updateHistory() {
            const historyItem = document.querySelector(`.history-item[data-turn="${gameState.currentTurn}"]`);
            const contentDiv = historyItem.querySelector('.history-item-content');
            
            const lastAction = gameState.history[gameState.history.length - 1];
            const character = gameState.characters.find(c => c.id === lastAction.characterId);
            
            contentDiv.innerHTML = `
                <span class="history-label">${lastAction.action.toUpperCase()}</span>
                <img src="${character.imgUrl}">
            `;
            
            if (lastAction.action.startsWith('b')) {
                historyItem.classList.add('banned');
            } else {
                historyItem.classList.remove('banned');
            }
        }

        // End current turn
        function endTurn() {
            clearInterval(gameState.timerInterval);
            startNextTurn();
        }

        // End the game
        function endGame() {
            clearInterval(gameState.timerInterval);
            gameOverDisplay.style.display = 'block';
        }

        // Pause/resume game
        pauseBtn.addEventListener('click', () => {
            gameState.isPaused = !gameState.isPaused;
            pauseBtn.textContent = gameState.isPaused ? 'Reanudar' : 'Pausa';
        });

        // Reset game
        resetBtn.addEventListener('click', () => {
            clearInterval(gameState.timerInterval);
            
            // Reset game state
            gameState.currentTurn = 0;
            gameState.player1ReserveTime = 130;
            gameState.player2ReserveTime = 130;
            gameState.currentTimer = 0;
            gameState.isPaused = false;
            gameState.history = [];
            
            // Reset characters
            gameState.characters.forEach(c => {
                c.banned = false;
                c.selectedBy = null;
            });
            
            // Reset UI
            updateTimerDisplays();
            gameOverDisplay.style.display = 'none';
            pauseBtn.textContent = 'Pausa';
            
            // Clear history display
            document.querySelectorAll('.history-item').forEach(item => {
                item.querySelector('.history-item-content').innerHTML = '';
                item.classList.remove('banned');
            });
            
            // Update all character cards
            gameState.characters.forEach(c => updateCharacterCard(c.id));
            
            // Start new game
            startNextTurn();
        });

        // Initialize the game when the page loads
        window.addEventListener('DOMContentLoaded', initGame);
    