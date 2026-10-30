// Produtos com imagens 100% fiéis aos nomes e descrições
        const produtos = [
            { 
                id: 1, 
                nome: "Refrigerante Guaraná Antarctica 2L", 
                preco: 10.00, 
                estoque: 20, 
                categoria: "bebida", 
                volume: "2 Litros", 
                servimento: "Servir gelado (2°C)", 
                harmonizacao: "Combina com salgados, pizzas e churrasco.", 
                descricao: "Refrigerante de guaraná legítimo brasileiro, sabor marcante e extremamente gelado.", 
                imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 2, 
                nome: "Vinho Tinto Cabernet Sauvignon 750ml", 
                preco: 45.00, 
                estoque: 15, 
                categoria: "vinhos", 
                volume: "750ml", 
                servimento: "Servir entre 16°C a 18°C", 
                harmonizacao: "Harmoniza com carnes vermelhas, queijos e massas com molho vermelho.", 
                descricao: "Vinho fino tinto seco reserva com notas refinadas de frutas vermelhas e toque sutil de carvalho.", 
                imagem: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 3, 
                nome: "Cerveja Pilsen Premium (Pack 6x Latas)", 
                preco: 28.00, 
                estoque: 35, 
                categoria: "cerveja", 
                volume: "Pack 6 Latas (350ml)", 
                servimento: "Servir estupidamente gelada (0°C)", 
                harmonizacao: "Perfeita com espetinhos, amendoim e petiscos de botequim.", 
                descricao: "Cerveja lager puro malte leve e refrescante, pronta para gelar seu churrasco.", 
                imagem: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 4, 
                nome: "Combo Gin Tônica Especial + Taça", 
                preco: 89.90, 
                estoque: 10, 
                categoria: "promocao", 
                volume: "Garrafa 750ml + 2 Tátonicas", 
                servimento: "Servir com bastante gelo e limão", 
                harmonizacao: "Excelente para festas e momentos de celebração.", 
                descricao: "Kit promocional com Gin premium 750ml + 2 latas de Tônica + Taça acrílica exclusiva.", 
                imagem: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 5, 
                nome: "Suco Natural de Laranja 1L", 
                preco: 12.00, 
                estoque: 12, 
                categoria: "bebida", 
                volume: "1 Litro", 
                servimento: "Servir bem gelado", 
                harmonizacao: "Ideal para o café da manhã ou refeições em família.", 
                descricao: "Suco 100% natural espremido na hora, sem conservantes e sem adição de açúcares.", 
                imagem: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 6, 
                nome: "Água Mineral Sem Gás (Pack 12x 500ml)", 
                preco: 18.00, 
                estoque: 60, 
                categoria: "bebida", 
                volume: "Fardo com 12 Garrafas", 
                servimento: "Ambiente ou Gelada", 
                harmonizacao: "Hidratação essencial.", 
                descricao: "Água mineral pura de fonte leve e cristalina em fardo conveniente de 12 unidades.", 
                imagem: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 7, 
                nome: "Whisky 12 Anos Importado 1L", 
                preco: 149.90, 
                estoque: 8, 
                categoria: "destilados", 
                volume: "Garrafa 1 Litro", 
                servimento: "Servir puro, com gelo ou água de coco", 
                harmonizacao: "Combina com queijos curados e frutos secos.", 
                descricao: "Whisky escocês nobre envelhecido em barris de carvalho com sabor marcante e aveludado.", 
                imagem: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 8, 
                nome: "Gelo em Cubos Filtrado Saco 5kg", 
                preco: 12.50, 
                estoque: 25, 
                categoria: "bebida", 
                volume: "Saco 5kg", 
                servimento: "Manter no freezer", 
                harmonizacao: "Ideal para drinks, térmicas e conservação de bebidas.", 
                descricao: "Gelo produzido com água purificada e tripla filtragem em cubos super resistentes.", 
                imagem: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 9, 
                nome: "Amendoim Torrado Salgado 200g", 
                preco: 8.50, 
                estoque: 30, 
                categoria: "petiscos", 
                volume: "Pacote 200g", 
                servimento: "Pronto para consumo", 
                harmonizacao: "Acompanhamento clássico para chopp e cervejas geladas.", 
                descricao: "Amendoim selecionado, torrado e temperado na medida exata de sal para aperitivos.", 
                imagem: "https://images.unsplash.com/photo-1536591375315-1b8368203230?w=600&auto=format&fit=crop&q=80" 
            },
            { 
                id: 10, 
                nome: "Vinho Espumante Brut Reserva 750ml", 
                preco: 58.00, 
                estoque: 14, 
                categoria: "vinhos", 
                volume: "750ml", 
                servimento: "Servir bem gelado (6°C a 8°C)", 
                harmonizacao: "Frutos do mar, peixes, aperitivos leves e celebrações.", 
                descricao: "Espumante brut elegante com perlage fina, aroma cítrico equilibrado e acidez refrescante.", 
                imagem: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80" 
            }
        ];

        let carrinho = [];
        let categoriaAtiva = 'todos';

        // Estado inicial de pedidos
        let pedidos = [
            {
                numero: 1,
                data: "2026-10-29 20:30",
                cliente: {
                    nome: "João Silva",
                    telefone: "99999-0000",
                    endereco: "Rua das Flores, 123 - Centro"
                },
                itens: [
                    { id: 1, nome: "Refrigerante Guaraná Antarctica 2L", quantidade: 5, precoUnitario: 10.00, subtotal: 50.00 }
                ],
                valorTotal: 50.00,
                pagamento: {
                    valor: 50.00,
                    forma: "Pix",
                    data: "2026-10-29 20:31"
                },
                entrega: {
                    endereco: "Rua das Flores, 123",
                    status: "Em preparação",
                    dataEntrega: "2026-10-29"
                },
                funcionario: "Maria (Atendente)"
            }
        ];

        window.onload = function() {
            filtrarProdutos();
            renderCarrinho();
            renderPedidosGestao();
            calcularBebidas();
        };

        function switchTab(tab) {
            document.getElementById('sec-loja').classList.add('hidden');
            document.getElementById('sec-calculadora').classList.add('hidden');
            document.getElementById('sec-gestao').classList.add('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.className = "tab-btn px-3 py-2 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold text-rose-100 hover:text-white hover:bg-wine-700/50 transition-all";
            });

            if(tab === 'loja') {
                document.getElementById('sec-loja').classList.remove('hidden');
                document.getElementById('tab-loja').className = "tab-btn px-3 py-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all bg-amber-400 text-wine-900 shadow-md";
            } else if(tab === 'calculadora') {
                document.getElementById('sec-calculadora').classList.remove('hidden');
                document.getElementById('tab-calculadora').className = "tab-btn px-3 py-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all bg-amber-400 text-wine-900 shadow-md";
            } else if(tab === 'gestao') {
                document.getElementById('sec-gestao').classList.remove('hidden');
                document.getElementById('tab-gestao').className = "tab-btn px-3 py-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all bg-amber-400 text-wine-900 shadow-md relative";
            }
        }

        function setCategoria(cat, btn) {
            categoriaAtiva = cat;
            document.querySelectorAll('.cat-btn').forEach(b => {
                b.className = "cat-btn px-3.5 py-2 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 whitespace-nowrap transition-all";
            });
            btn.className = "cat-btn px-3.5 py-2 rounded-xl font-bold bg-wine-800 text-white shadow-sm whitespace-nowrap transition-all";
            filtrarProdutos();
        }

        function filtrarProdutos() {
            const query = document.getElementById('search-input').value.toLowerCase();
            const ordenacao = document.getElementById('sort-select').value;
            const grid = document.getElementById('catalog-grid');

            let filtrados = produtos.filter(p => {
                const matchCat = categoriaAtiva === 'todos' || p.categoria === categoriaAtiva;
                const matchQuery = p.nome.toLowerCase().includes(query) || p.descricao.toLowerCase().includes(query);
                return matchCat && matchQuery;
            });

            if(ordenacao === 'menor-preco') filtrados.sort((a,b) => a.preco - b.preco);
            if(ordenacao === 'maior-preco') filtrados.sort((a,b) => b.preco - a.preco);
            if(ordenacao === 'nome') filtrados.sort((a,b) => a.nome.localeCompare(b.nome));

            grid.innerHTML = '';

            if(filtrados.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-1 sm:col-span-2 bg-white rounded-2xl p-8 text-center text-slate-400 border border-slate-200">
                        <i class="fa-solid fa-wine-bottle text-4xl mb-2 text-slate-300"></i>
                        <p class="font-bold text-slate-600">Nenhum produto encontrado.</p>
                        <p class="text-xs">Tente buscar por outros termos ou selecionar outra categoria.</p>
                    </div>
                `;
                return;
            }

            filtrados.forEach(p => {
                grid.innerHTML += `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between group">
                        <div>
                            <div class="relative h-48 w-full bg-slate-100 overflow-hidden">
                                <img src="${p.imagem}" alt="${p.nome}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://placehold.co/600x400/800f26/ffffff?text=${encodeURIComponent(p.nome)}'">
                                <span class="absolute top-2.5 left-2.5 bg-wine-900/90 backdrop-blur-md text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                                    ${p.volume}
                                </span>
                                <span class="absolute bottom-2.5 right-2.5 bg-emerald-600 text-white font-black text-sm px-3 py-1 rounded-xl shadow-lg border border-emerald-400">
                                    R$ ${p.preco.toFixed(2).replace('.', ',')}
                                </span>
                            </div>

                            <div class="p-4 space-y-2">
                                <h4 class="font-extrabold text-slate-800 text-sm leading-snug group-hover:text-wine-700 transition-colors">${p.nome}</h4>
                                <p class="text-xs text-slate-500 line-clamp-2">${p.descricao}</p>
                                <div class="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium pt-1">
                                    <i class="fa-solid fa-temperature-arrow-down text-blue-500"></i>
                                    <span>${p.servimento}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 pt-0 space-y-2">
                            <div class="flex items-center justify-between text-xs font-semibold text-slate-500 border-t border-slate-100 pt-2.5">
                                <span>Estoque: <strong class="text-slate-700">${p.estoque} un.</strong></span>
                                <button onclick="abrirModalProduto(${p.id})" class="text-wine-700 hover:underline text-[11px] font-bold flex items-center gap-1">
                                    <i class="fa-solid fa-circle-info"></i> Harmonização
                                </button>
                            </div>
                            <button onclick="adicionarAoCarrinho(${p.id})" class="w-full py-2.5 bg-wine-700 hover:bg-wine-800 active:scale-95 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2">
                                <i class="fa-solid fa-cart-plus text-amber-300"></i> Adicionar ao Pedido
                            </button>
                        </div>
                    </div>
                `;
            });
        }

        function abrirModalProduto(id) {
            const p = produtos.find(item => item.id === id);
            if(!p) return;

            document.getElementById('modal-prod-body').innerHTML = `
                <div class="space-y-3">
                    <img src="${p.imagem}" class="w-full h-48 object-cover rounded-2xl shadow-sm" onerror="this.src='https://placehold.co/600x400/800f26/ffffff?text=${encodeURIComponent(p.nome)}'">
                    <div>
                        <span class="text-[10px] font-extrabold uppercase bg-wine-100 text-wine-800 px-2.5 py-0.5 rounded-full">${p.categoria}</span>
                        <h3 class="text-base font-extrabold text-slate-800 mt-1">${p.nome}</h3>
                        <p class="text-wine-700 font-black text-lg">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed">${p.descricao}</p>
                    <div class="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs space-y-1.5">
                        <p class="font-bold text-slate-700"><i class="fa-solid fa-temperature-full text-rose-600 mr-1.5"></i> Servimento:</p>
                        <p class="text-slate-600 pl-5">${p.servimento}</p>
                        <p class="font-bold text-slate-700 pt-1"><i class="fa-solid fa-utensils text-amber-600 mr-1.5"></i> Sugestão de Harmonização:</p>
                        <p class="text-slate-600 pl-5">${p.harmonizacao}</p>
                    </div>
                    <button onclick="adicionarAoCarrinho(${p.id}); fecharModalProduto();" class="w-full py-2.5 bg-wine-700 hover:bg-wine-800 text-white font-bold text-xs rounded-xl shadow">
                        Adicionar ao Pedido Agora
                    </button>
                </div>
            `;
            document.getElementById('modal-produto').classList.remove('hidden');
        }

        function fecharModalProduto() {
            document.getElementById('modal-produto').classList.add('hidden');
        }

        function adicionarAoCarrinho(id) {
            const p = produtos.find(item => item.id === id);
            if(!p) return;

            const itemExistente = carrinho.find(item => item.id === id);
            if(itemExistente) {
                if(itemExistente.quantidade < p.estoque) {
                    itemExistente.quantidade++;
                } else {
                    alert('Quantidade limite do estoque atingida.');
                }
            } else {
                carrinho.push({
                    id: p.id,
                    nome: p.nome,
                    preco: p.preco,
                    quantidade: 1
                });
            }
            renderCarrinho();
        }

        function alterarQuantidade(id, delta) {
            const item = carrinho.find(i => i.id === id);
            if(!item) return;

            item.quantidade += delta;
            if(item.quantidade <= 0) {
                carrinho = carrinho.filter(i => i.id !== id);
            }
            renderCarrinho();
        }

        function renderCarrinho() {
            const container = document.getElementById('cart-items');
            const tipoEntrega = document.getElementById('tipo-entrega-select').value;
            const campoEndereco = document.getElementById('campo-endereco-container');

            if(tipoEntrega === 'balcao') {
                campoEndereco.style.display = 'none';
            } else {
                campoEndereco.style.display = 'block';
            }

            container.innerHTML = '';

            let subtotal = 0;
            let totalItens = 0;

            if(carrinho.length === 0) {
                container.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Seu carrinho está vazio.</p>';
            } else {
                carrinho.forEach(item => {
                    const itemSubtotal = item.preco * item.quantidade;
                    subtotal += itemSubtotal;
                    totalItens += item.quantidade;

                    container.innerHTML += `
                        <div class="flex justify-between items-center text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                            <div class="flex-1 pr-2">
                                <p class="font-bold text-slate-800 line-clamp-1">${item.nome}</p>
                                <p class="text-slate-500">R$ ${item.preco.toFixed(2).replace('.', ',')} x ${item.quantidade}</p>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <button onclick="alterarQuantidade(${item.id}, -1)" class="w-6 h-6 bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center font-bold hover:bg-slate-300">-</button>
                                <span class="font-extrabold w-4 text-center text-slate-800">${item.quantidade}</span>
                                <button onclick="alterarQuantidade(${item.id}, 1)" class="w-6 h-6 bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center font-bold hover:bg-slate-300">+</button>
                            </div>
                        </div>
                    `;
                });
            }

            const taxaEntrega = (tipoEntrega === 'entrega' && subtotal > 0 && subtotal < 80) ? 7.00 : 0.00;
            const total = subtotal + taxaEntrega;

            document.getElementById('cart-count-badge').innerText = `${totalItens} itens`;
            document.getElementById('cart-subtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            document.getElementById('cart-taxa').innerText = (tipoEntrega === 'balcao' || subtotal >= 80) ? 'GRÁTIS' : `R$ ${taxaEntrega.toFixed(2).replace('.', ',')}`;
            document.getElementById('cart-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

        function finalizarPedidoCliente() {
            if(carrinho.length === 0) {
                alert('Seu carrinho está vazio! Adicione produtos antes de finalizar.');
                return;
            }

            const nome = document.getElementById('cli-nome').value;
            const fone = document.getElementById('cli-fone').value;
            const endereco = document.getElementById('cli-endereco').value;
            const tipoEntrega = document.getElementById('tipo-entrega-select').value;
            const formaPag = document.getElementById('forma-pagamento').value;
            const obs = document.getElementById('cli-obs').value;

            if(!nome || !fone || (tipoEntrega === 'entrega' && !endereco)) {
                alert('Por favor, preencha os dados de nome, telefone e endereço.');
                return;
            }

            const subtotal = carrinho.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
            const taxa = (tipoEntrega === 'entrega' && subtotal < 80) ? 7.00 : 0.00;
            const valorTotal = subtotal + taxa;

            const novoNumero = pedidos.length + 1;
            const agora = new Date().toISOString().replace('T', ' ').substring(0, 16);

            const novoPedido = {
                numero: novoNumero,
                data: agora,
                cliente: { nome, telefone: fone, endereco: tipoEntrega === 'balcao' ? 'Retirada no Balcão' : endereco },
                itens: carrinho.map(i => ({ id: i.id, nome: i.nome, quantidade: i.quantidade, precoUnitario: i.preco, subtotal: i.preco * i.quantidade })),
                valorTotal: valorTotal,
                pagamento: { valor: valorTotal, forma: formaPag, data: agora },
                entrega: { endereco: tipoEntrega === 'balcao' ? 'Retirada no Balcão' : endereco, status: "Em preparação", dataEntrega: agora.split(' ')[0] },
                funcionario: "Atendente Balcão",
                observacao: obs
            };

            pedidos.unshift(novoPedido);

            // Gerar visualização de Recibo
            let itensHtml = novoPedido.itens.map(i => `<div>• ${i.quantidade}x ${i.nome} - R$ ${i.subtotal.toFixed(2).replace('.', ',')}</div>`).join('');

            document.getElementById('modal-conteudo').innerHTML = `
                <div class="border-b border-slate-300 pb-2 mb-2">
                    <strong class="text-slate-800">PEDIDO #${String(novoPedido.numero).padStart(3, '0')}</strong><br>
                    <span class="text-slate-500">Cliente: ${nome} (${fone})</span><br>
                    <span class="text-slate-500">Entrega: ${novoPedido.entrega.endereco}</span>
                </div>
                <div class="space-y-1 my-2">
                    ${itensHtml}
                </div>
                ${obs ? `<p class="text-[11px] text-amber-700 bg-amber-50 p-1.5 rounded">Obs: ${obs}</p>` : ''}
                <div class="border-t border-slate-300 pt-2 mt-2 font-bold flex justify-between text-slate-800">
                    <span>TOTAL:</span>
                    <span class="text-wine-700">R$ ${valorTotal.toFixed(2).replace('.', ',')} (${formaPag})</span>
                </div>
            `;

            document.getElementById('modal-recibo').classList.remove('hidden');

            // Resetar Carrinho
            carrinho = [];
            renderCarrinho();
            renderPedidosGestao();
        }

        function fecharModal() {
            document.getElementById('modal-recibo').classList.add('hidden');
        }

        function calcularBebidas() {
            const pessoas = parseInt(document.getElementById('calc-pessoas').value) || 0;
            const horas = parseInt(document.getElementById('calc-horas').value) || 0;
            const perfil = document.getElementById('calc-perfil').value;

            let cervejaLatas = 0;
            let refriLitros = 0;
            let vinhoGarrafas = 0;
            let geloKg = Math.ceil(pessoas * 0.8);

            if(perfil === 'cervejeiro') {
                cervejaLatas = Math.ceil(pessoas * (horas * 1.5));
                refriLitros = Math.ceil((pessoas * 0.3) * (horas * 0.25));
            } else if(perfil === 'vinhos') {
                cervejaLatas = Math.ceil(pessoas * (horas * 0.6));
                vinhoGarrafas = Math.ceil(pessoas / 3);
                refriLitros = Math.ceil(pessoas * 0.4);
            } else {
                cervejaLatas = Math.ceil(pessoas * (horas * 1.0));
                refriLitros = Math.ceil(pessoas * 0.5);
                vinhoGarrafas = Math.ceil(pessoas / 5);
            }

            document.getElementById('calc-resultado').innerHTML = `
                <div class="bg-white p-3 rounded-xl border border-wine-100 flex items-center justify-between">
                    <span><i class="fa-solid fa-beer-mug-empty text-amber-500 mr-2"></i> Cerveja (350ml):</span>
                    <strong class="text-wine-800 font-extrabold text-sm">${cervejaLatas} latas (~${Math.ceil(cervejaLatas/6)} packs)</strong>
                </div>
                <div class="bg-white p-3 rounded-xl border border-wine-100 flex items-center justify-between">
                    <span><i class="fa-solid fa-bottle-water text-cyan-500 mr-2"></i> Refrigerante / Água:</span>
                    <strong class="text-wine-800 font-extrabold text-sm">${refriLitros} Litros</strong>
                </div>
                <div class="bg-white p-3 rounded-xl border border-wine-100 flex items-center justify-between">
                    <span><i class="fa-solid fa-wine-glass text-wine-600 mr-2"></i> Vinhos / Espumantes:</span>
                    <strong class="text-wine-800 font-extrabold text-sm">${vinhoGarrafas} garrafas (750ml)</strong>
                </div>
                <div class="bg-white p-3 rounded-xl border border-wine-100 flex items-center justify-between">
                    <span><i class="fa-solid fa-snowflake text-blue-400 mr-2"></i> Gelo em Cubos:</span>
                    <strong class="text-wine-800 font-extrabold text-sm">${geloKg} kg (~${Math.ceil(geloKg/5)} sacos 5kg)</strong>
                </div>
            `;
        }

        function renderPedidosGestao() {
            const container = document.getElementById('pedidos-lista');
            const filtro = document.getElementById('filtro-status-gestao').value;

            let faturamento = 0;
            let pendentesCount = 0;

            let exibidos = pedidos.filter(p => {
                faturamento += p.valorTotal;
                if(p.entrega.status !== 'Entregue / Concluído') pendentesCount++;

                if(filtro === 'todos') return true;
                return p.entrega.status === filtro;
            });

            document.getElementById('stat-total-pedidos').innerText = pedidos.length;
            document.getElementById('stat-faturamento').innerText = `R$ ${faturamento.toFixed(2).replace('.', ',')}`;
            document.getElementById('stat-pendentes').innerText = pendentesCount;
            document.getElementById('badge-pedidos-pendentes').innerText = pendentesCount;

            container.innerHTML = '';

            if(exibidos.length === 0) {
                container.innerHTML = `
                    <div class="bg-white rounded-2xl p-8 text-center text-slate-400 border border-slate-200">
                        <i class="fa-solid fa-inbox text-4xl mb-2 text-slate-300"></i>
                        <p class="font-bold text-slate-600">Nenhum pedido cadastrado nesta categoria.</p>
                    </div>
                `;
                return;
            }

            exibidos.forEach(p => {
                let badgeColor = "bg-amber-100 text-amber-800 border-amber-300";
                if(p.entrega.status === "Saiu para Entrega") badgeColor = "bg-blue-100 text-blue-800 border-blue-300";
                if(p.entrega.status === "Entregue / Concluído") badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";

                let itensStr = p.itens.map(i => `<span class="bg-slate-100 px-2 py-1 rounded-md text-[11px] border border-slate-200">${i.quantidade}x ${i.nome}</span>`).join(' ');

                container.innerHTML += `
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
                            <div class="flex items-center gap-3">
                                <span class="text-base font-black text-wine-800 bg-wine-50 px-3 py-1 rounded-xl border border-wine-200">
                                    #${String(p.numero).padStart(3, '0')}
                                </span>
                                <div>
                                    <h4 class="font-extrabold text-slate-800 text-sm">${p.cliente.nome}</h4>
                                    <p class="text-xs text-slate-500"><i class="fa-solid fa-phone mr-1"></i>${p.cliente.telefone} • ${p.data}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-bold px-3 py-1 rounded-full border ${badgeColor}">
                                    ${p.entrega.status}
                                </span>
                            </div>
                        </div>

                        <div class="space-y-2 text-xs">
                            <p class="text-slate-600"><strong>Endereço:</strong> ${p.cliente.endereco}</p>
                            <div class="flex flex-wrap gap-1.5 py-1">
                                ${itensStr}
                            </div>
                            ${p.observacao ? `<p class="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-xl border border-amber-200"><strong>Obs:</strong> ${p.observacao}</p>` : ''}
                        </div>

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                            <div class="text-slate-700">
                                Total: <strong class="text-wine-700 text-sm">R$ ${p.valorTotal.toFixed(2).replace('.', ',')}</strong>
                                <span class="text-slate-400 ml-1">(${p.pagamento.forma})</span>
                            </div>

                            <div class="flex items-center gap-2">
                                <button onclick="avançarStatus(${p.numero})" class="px-3 py-2 bg-wine-700 hover:bg-wine-800 text-white font-bold rounded-xl shadow-sm transition-all text-xs flex items-center gap-1.5">
                                    <i class="fa-solid fa-arrows-rotate"></i> Alterar Status
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        function avançarStatus(numero) {
            const p = pedidos.find(item => item.numero === numero);
            if(!p) return;

            if(p.entrega.status === "Em preparação") {
                p.entrega.status = "Saiu para Entrega";
            } else if(p.entrega.status === "Saiu para Entrega") {
                p.entrega.status = "Entregue / Concluído";
            } else {
                p.entrega.status = "Em preparação";
            }
            renderPedidosGestao();
        }
