# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Connecta3D — configuração do negócio

> Aplicado pelo `/instalar` em 23/08/2026. Perfil escolhido: **empresa**.
> Adaptado à realidade da operação (dois sócios, sem setores formais).

## O que é esse workspace

Operação da Connecta3D. Tudo que a loja produz — conteúdo, catálogo de
produto, site, atendimento e material de venda — mora aqui.

**Estrutura de pastas:**
- `_memoria/` — quem é a empresa, como falamos, foco atual
- `identidade/` — marca aplicada em tudo que o sistema gera (logo, cores, fontes)
- `marketing/` — posts, campanhas, conteúdo do Instagram
- `saidas/` — documentos e entregas pontuais
- `dados/` — arquivos a analisar (exports de venda, planilhas)
- `scripts/` e `templates/` — apoio do próprio MazyOS

*(Criar conforme a necessidade aparecer: `site/` para o projeto do site,
`produtos/` para a ficha de cada produto do catálogo.)*

## Sobre a empresa

Connecta3D é uma loja de impressão 3D em início de operação, tocada por dois
sócios: Johnathan à frente do comercial e do marketing, e o sócio operando as
impressões. Vende acessórios e peças impressas em 3D para consumidor final —
porta-latas, porta-chaves temáticos e projetos individuais sob encomenda — com
envio para todo o Brasil.

Canais hoje: Instagram `@connecta_3d` (principal), Marketplace do Facebook,
Shopee e Mercado Livre. Todo pedido fecha no direct ou no WhatsApp.

## Frentes de trabalho

- **Conteúdo e Instagram** — post de produto novo, legenda, carrossel
- **Atendimento e vendas** — resposta de direct e WhatsApp (cor, prazo, pronta entrega)
- **Catálogo e site** — prioridade atual, ver `_memoria/estrategia.md`
- **Marketplaces** — anúncios no Shopee, Mercado Livre e Facebook

## O que mais fazemos aqui

- Post e legenda de produto novo para o Instagram
- Mensagens de abordagem e resposta de direct/WhatsApp
- Ficha de produto (fotos, descrição, aplicação, cores, prazo)
- Material do site da loja

## Tom de voz

Curto, direto, informal, sem rodeio — jeito de quem vende no direct.
No 1:1, uma pergunta fechada por mensagem: *"Vai querer o porta chaves na cor
cinza mesmo ou vc tem outra cor em mente?"*. Na legenda, mais animado, com
emoji e as cores listadas. Detalhe completo em `_memoria/preferencias.md`.

Evitar: textão, formalidade de ofício ("prezado", "caro cliente"), jargão de
marketing e mensagem que termina sem pergunta.

## Regras do sistema

- Todo texto para cliente deve deixar claro **cor disponível, prazo e pronta entrega**
- Toda peça visual respeita `identidade/design-guide.md` — preto + laranja `#F26B21`
- Post e legenda do Instagram salvar em `marketing/`
- Material e conteúdo do site salvar em `site/` (criar quando o projeto começar)
- Link de contato sempre aponta para o WhatsApp; link social sempre para `@connecta_3d`

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Google Ads
- [ ] Meta Ads
- [ ] Slack

*(Marcar conforme for instalando os MCPs)*
