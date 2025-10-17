# Desafio Técnico – Front-end na Lacrei Saúde

## Proposta do desafio

Sua missão será desenvolver duas páginas web interativas, com foco em **acessibilidade, responsividade, performance e impacto visual**, respeitando a identidade da Lacrei Saúde e nossa missão de garantir que cada pessoa se sinta segura ao buscar cuidado.

Este desafio também se conecta com os fluxos de Back-end e DevOps, simulando a realidade de desenvolvimento em produção.

## Documento de especificações técnicas

[Documento de especificações técnicas](https://kind-parent-217.notion.site/Lacrei-Saude-Desafio-T-cnico-27dfcc79429880a49031fb860c0ec2b5?pvs=73)

## Link para acessar o projeto

[Plataforma Lacrei Saúde](https://lacrei-saude-fe-teste.vercel.app/)

## Setup

Para rodar o projeto localmente:

```
npm install
```

```
npm run dev
```

Para realizar a build do projeto rode:

```
npm run build
```

Para testar a build localmente rode:

```
npm run start
```

> O deploy é feito automaticamente pelo Github e na Vercel.

Para a criação de um deploy:

```
git init
```

```
git remote add origin <URL_DO_REPOSITORIO>
```

```
git pull
```

```
git add .
```

```
git commit -m "Initial commit"
```

```
git push -u origin main
```

Realizar as configurações necessárias na própria vercel (https://vercel.com), e settar a variavel de ambiente BACKEND_URL no padrão (http://localhost:3000/api).

## Testes

### Footer (5 testes)

| #   | Teste                  | Descrição                                                             |
| --- | ---------------------- | --------------------------------------------------------------------- |
| 1   | **Links de navegação** | Verifica se "Lacrei Saúde" e "Pessoas Profissionais" são renderizados |
| 2   | **CNPJ**               | Valida a exibição do CNPJ da empresa                                  |
| 3   | **Redes sociais**      | Confirma que existem 4 botões de redes sociais                        |
| 4   | **Logo**               | Verifica se a logo correta do desktop foi renderizada                 |
| 5   | **Acessibilidade**     | Confirma que os botões das redes sociais possuem aria-label com texto correto |

### PrimaryBadge (3 testes)

| #   | Teste                | Descrição                                   |
| --- | -------------------- | ------------------------------------------- |
| 1   | **Badge com texto**  | Renderiza badge do tipo "success" com texto |
| 2   | **Badge com ícone**  | Renderiza badge com ícone e texto           |

- Todos os testes focam nos comportamentos essenciais de cada componente
- Testes utilizam `@testing-library/react` para renderização e queries

[Testes no terminal](/public/tests.png);

### Para executar os testes rode:

```
npm run test
```

### Para executar os testes em watch mode rode:

```
npm run test:watch
```

### Para executar a cobertura de testes rode:

```
npm run test:coverage
```

## Proposta de rollback

Caso o deploy mais recente apresente problemas, na Vercel é possível realizar um Rollback para voltar a versão anterior.

Isso pode ser acessado pela Overview do projeto no botão de 3 pontinhos.

## Escolhas visuais e técnicas realizadas

- Escolhi as cores primárias dos tons de cinza e verde, visto que os componentes escolhidos para a construção da tela de acordo com o guia de estilo seguiam essa palheta;

- Criei uma separação entre os componentes facilitando a reutilização e padronização visual;

- Procurei buscar utilizar tags semânticas do HTML, utilizando tags não-semânticas somente quando não outra alternativa e apliquei atributos do aria quando necessário; O contraste foi validado no Lighthouse;

- Desenvolvi mobile-first, garantindo a adaptação do layout nos diferentes tamanhos de tela;

- Em busca de uma boa perfomance foram utilizadas as tags nativas do next para imagens, configurou-se a fonte do google pelo next/font; Foi utilizado next/dynamic quando necessário; A performance foi validada no Lighthouse;

- Realizei a separação dos estilos criando tokens e mixins para organização e reutilização;

## Proposta de rollback funcional

Acessar o painel de deploys, acessando o projeto > deployments. Ali aparecerá todo o histórico de deploys, clicar nos 3 pontinhos na versão desejada e clicar em Instant Rollback.

No caso de manutenção do projeto e em caso real, as branches que não são a principal irão listar como Preview, é possível então verificar por meio do link de preview temporário. Se estiver tudo ok, basta promover para production (Promote) no mesmo local onde fica o Instant Rollback.

## Justificativas visuais e técnicas

- A componetização foi realizada pensando na manutenção futura e tamanho do projeto;

- Foram incluídos aspectos de acessibilidade para abrangir uma gama maior de usuários;

- O mobile-first foi utilizado visto que a responsividade é um requisito essencial para qualquer aplicação web, melhorando a experiência de usuários (visto que inclusive muitos visualizam sites pelo celular);

## Validação lighthouse

> Validação de performance e acessibilidade

### Validação mobile

![Validação Mobile Lighthouse](/public/lighthouse-mobile.png)

### Validação desktop

![Validação Desktop Lighthouse](/public/lighthouse-desktop.png)