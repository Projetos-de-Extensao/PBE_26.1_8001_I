---
id: prototipobaixa
title: Protótipo de Baixa Fidelidade
---

## Introdução

<p align = "justify">
A construção do protótipo de alta fidelidade auxilia a equipe de desenvolvimento a encontrar um nível de detalhes abrangentes, extrair funcionalidades, testar usabilidade, e também fornece uma base para o gerenciamento do projeto pois com o protótipo é possível realizar estimativas de quanto tempo será necessário desempenhar em cada funcionalidade.
</p>

## Metodologia

<p align = "justify">
Iniciamos o projeto através dos levantamentos iniciais da equipe, após discussões a ferramenta Figma foi selecionada para produzir o protótipo de alta fidelidade com auxílio do Material Design Color Tool.
</p>

## Protótipo de baixa fidelidade

<p align = "justify">
Este protótipo de baixa fidelidade descreve a experiência básica da aplicação "Sistema de Validação de Estágios" para os dois perfis identificados: aluno e coordenador. O foco está em validar fluxo de login, abertura de solicitação, upload de documentos, acompanhamento de status e análise de conformidade com apoio de IA.
</p>

### Telas necessárias

- **Login institucional**: acesso restrito a e-mail @ibmec e discriminação de perfis Aluno ou Coordenador.
- **Dashboard do Aluno**: visão das solicitações abertas, status e notificações de validação.
- **Nova Solicitação**: formulário com seleção de curso/campus, checklist dinâmico e upload de documentos, além de links para modelos oficiais.
- **Painel do Coordenador**: lista de solicitações pendentes, filtro por curso/status e resumo de workload.
- **Detalhes da Solicitação**: painel de análise com score da IA, documentos enviados, comentários e ações de validação/assinatura.

### PlantUML Salt - Login institucional

```plantuml
@startsalt
title Login - Sistema de Validação de Estágios

{
  [IBMEC | Sistema de Validação de Estágio]
  --
  [Email institucional]
  [Senha]
  [Entrar]
  [Esqueci a senha?]
  --
  [Aluno]
  [Coordenador]
}
@endsalt
```

### PlantUML Salt - Dashboard do Aluno

```plantuml
@startsalt
title Dashboard do Aluno - Solicitações

{
  hbox
  {
    vbox
    {
      [Nova Solicitação]
      [Modelos de Documentos]
      [Meu Perfil]
    }
    --
    vbox
    {
      [Solicitação 001]
      [Status: Em análise]
      [Score: 78%]
      [Última atualização: 21/04/2026]
    }
  }
  --
  [Notificações]
  [Tarefas pendentes: 2]
}
@endsalt
```

### PlantUML Salt - Formulário de Nova Solicitação

```plantuml
@startsalt
title Nova Solicitação de Validação - Aluno

{
  [Curso]
  [Campus]
  [Tipo de Estágio]
  --
  [Checklist Dinâmico]
  [Contrato de Estágio]
  [Relatório Parcial]
  [Comprovante de Seguro]
  --
  [Upload de Documentos]
  [Enviar Solicitação]
  [Cancelar]
}
@endsalt
```

### PlantUML Salt - Painel do Coordenador

```plantuml
@startsalt
title Painel do Coordenador - Solicitações Pendentes

{
  [Filtro: Curso]
  [Filtro: Status]
  [Buscar]
  --
  [Solicitação #123 | Aluno: Ana Silva | Score: 65% | Revisar]
  [Solicitação #124 | Aluno: Pedro Souza | Score: 92% | Revisar]
  --
  [Solicitações abertas: 8]
  [Pendentes de assinatura: 3]
}
@endsalt
```

### PlantUML Salt - Detalhes da Solicitação para Validação

```plantuml
@startsalt
title Detalhes da Solicitação - Coordenador

{
  [Aluno: Ana Silva]
  [Curso: Sistemas de Informação]
  [Campus: Asa Norte]
  [Status: Em validação]
  --
  [Score IA: 78%]
  [Documentos aceitos: 4/5]
  [Comentário da IA: Assinatura ausente no contrato]
  --
  [Aprovar]
  [Reprovar]
  [Encaminhar para Reitoria]
  [Solicitar retificação]
}
@endsalt
```

## Conclusão

<p align = "justify">
A partir da elaboração do protótipo foi possível ter uma noção inicial da interface do usuário, definindo fluxo, paleta de cores, botões, app bars e diversas outras funcionalidades
</p>

## Referências

> Material Design Color Tool. Disponível em: https://material.io/resources/color/#!/?view.left=0&view.right=0

> PMI. Um guia do conhecimento em gerenciamento de projetos. Guia PMBOK® 5a. ed. EUA: Project Management Institute, 2013.

> Ferramenta Figma. Disponível em https://www.figma.com

## Autor(es)

| Data     | Versão | Descrição                            | Autor(es)                                                                           |
| -------- | ------ | ------------------------------------ | ----------------------------------------------------------------------------------- |
| 07/09/20 | 1.0    | Criação do documento                 | Lucas Alexandre e Matheus Estanislau                                                |
| 07/09/20 | 1.1    | Adicionado as imagens do protótipo   | Lucas Alexandre e Matheus Estanislau                                                |
| 07/09/20 | 1.2    | Adicionado conclusão e referências   | Lucas Alexandre e Matheus Estanislau                                                |
| 26/10/20 | 2.0    | Adicionada a versão 2.0 do protótipo | João Pedro, Lucas Alexandre, Matheus Estanislau, Moacir Mascarenha e Renan Cristyan |
