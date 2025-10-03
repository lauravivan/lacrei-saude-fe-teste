# Desafio Técnico – Front-end na Lacrei Saúde

## Proposta do desafio

Sua missão será desenvolver duas páginas web interativas, com foco em **acessibilidade, responsividade, performance e impacto visual**, respeitando a identidade da Lacrei Saúde e nossa missão de garantir que cada pessoa se sinta segura ao buscar cuidado.

Este desafio também se conecta com os fluxos de Back-end e DevOps, simulando a realidade de desenvolvimento em produção.

## Technical document

[Technical document](https://kind-parent-217.notion.site/Lacrei-Saude-Desafio-T-cnico-27dfcc79429880a49031fb860c0ec2b5?pvs=73)

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

## Proposta de rollback

Caso o deploy mais recente apresente problemas, na Vercel é possível realizar um Rollback para voltar a versão anterior.

Isso pode ser acessado pela Overview do projeto no botão de 3 pontinhos.

## Escolhas visuais e técnicas realizadas

## Proposta de rollback funcional

Acessar o painel de deploys, acessando o projeto > deployments. Ali aparecerá todo o histórico de deploys, clicar nos 3 pontinhos na versão desejada e clicar em Instant Rollback.

No caso de manutenção do projeto e em caso real, as branches que não são a principal irão listar como Preview, é possível então verificar por meio do link de preview temporário. Se estiver tudo ok, basta promover para production (Promote) no mesmo local onde fica o Instant Rollback.

## Justificativas visuais e técnicas
