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
- **Assinatura Digital / Termo de Aceite**: tela onde alunos e coordenadores podem assinar e concordar com termos dos documentos recebidos por eles.
- **Parecer Final do Coordenador**: onde o coordenador visualiza o relatório do aluno, a avaliação da empresa e o parecer do professor orientador e aprova ou não o aluno.

### PlantUML Salt - Login institucional

```plantuml
@startsalt
title Login - Sistema de Validação de Estágios

{
  **IBMEC Sistema de Validação de Estágio**
  --
  "Email institucional"
  "Senha"
  "Entrar"
  [Esqueceu a senha?]
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
  {+
    Olá, Aluno!
    {+
    --
      [**Nova Solicitação**]
      --
      [Modelos de Documentos]
      [Meu Perfil]
      [Notificações]
      [Tarefas pendentes: 2]
    }
    --
    **Suas Solicitações**
    --
    {+
      **Solicitação 001**
      {-
        **Status:** Em análise
        **Score:** 78%
        **Última atualização:** 21/04/2026
      }
    }
    --
    {+
      **Solicitação 002**
      {-
        **Status:** Em análise
        **Score:** 78%
        **Última atualização:** 21/04/2026
      }
    }
  }
}
@endsalt
```

### PlantUML Salt - Formulário de Nova Solicitação

```plantuml
@startsalt
title Nova Solicitação de Validação - Aluno

{
  "Curso"
  "Campus"
  "Tipo de Estágio"
  --
  [Checklist Dinâmico]
  [Contrato de Estágio]
  [Relatório Parcial]
  [Comprovante de Seguro]
  --
  [Upload de Documentos]
  [Enviar Solicitação]
  [<&circle-x>Cancelar]
}
@endsalt
```

### PlantUML Salt - Painel do Coordenador

```plantuml
@startsalt
title Painel do Coordenador - Solicitações Pendentes

{
  {+
  **Solicitações Pendentes**
  --
    [**Filtro:** Curso]  
    [**Filtro:** Status]
    [Buscar]
    --
    {+
      {-
      Solicitação #123 | Aluno: Ana Silva | Score: 65% | Revisar
      Solicitação #124 | Aluno: Pedro Souza | Score: 92% | Revisar
      }
    }
    --
    **Solicitações abertas:** 8
    **Pendentes de assinatura:** 3
  }
}
@endsalt
```

### PlantUML Salt - Detalhes da Solicitação para Validação

```plantuml
@startsalt
title Detalhes da Solicitação - Coordenador

{
  {+
  **Aluno:** Ana Silva
  **Curso:** Sistemas de Informação
  **Campus:** Asa Norte
  **Status:** Em validação
  --
  **Score IA:** 78%
  **Documentos aceitos:** 4/5
  **Comentário da IA:** Assinatura ausente no contrato
  --
  }
  [<&check>Aprovar]
  [<&circle-x>Reprovar]
  [Encaminhar para Reitoria]
  [Solicitar retificação]
}
@endsalt
```

### PlantUML Salt - Assinatura Digital / Termo de Aceite

```plantuml
@startsalt
title Validação e Assinatura Digital

{+
  {
**Formalização de Documento**
--
**Arquivo:** Contrato_Estagio_Assinado_Empresa.pdf
**Emitente:** IBMEC - Setor de Estágios
--
[Visualizar Documento Completo]
--
**Termo de Concordância**
[] Declaro que li e concordo com os termos descritos.
[] Confirmo a veracidade das informações prestadas.
--
"Insira sua senha para assinar"
[Assinar Digitalmente]
[<&circle-x>Cancelar]
}
}
@endsalt
```

### Parecer Final - Coordenador

```plantuml
@startsalt
title Parecer Técnico - Coordenador

{
  {+
**Avaliação de Relatório de Estágio**
--
**Aluno:** Ana Silva (Sistemas de Informação)
**Empresa:** Tech Solutions S/A
**Documento:** Relatório Final de Atividades
--
[Visualizar Relatório do Aluno]
[Visualizar Avaliação da Empresa]
--
**Parecer do Professor Orientador**
O aluno demonstrou domínio na aplicação prática de...
--
**Conceito Final:**
() Aprovado (Horas validadas)
() Aprovado com Ressalvas
() Reprovado (Necessita refazer)
--
[Registrar Parecer no Sistema]
[<&circle-x>Cancelar]
}
}
@endsalt
```

## Conclusão

<p align = "justify">
A partir da elaboração do protótipo foi possível ter uma noção inicial da interface do usuário, definindo telas, fluxo e algumas funcionalidades.
</p>

## Referências

> Ferramenta PlantUML para Criação de Prtotótipos. Disponível em https://plantuml.com/salt

## Autor(es)

| Data     | Versão | Descrição                            | Autor(es)                                                                           |
| -------- | ------ | ------------------------------------ | ----------------------------------------------------------------------------------- |
| 10/04/2026 | 1.0    | Criação de documento | Bruno Norton, Christian Werneck, Gianluca Leonardi, Marcos Paulo Assunção, Maurício Gomes e Micael Dali |