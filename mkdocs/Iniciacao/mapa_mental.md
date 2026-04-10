---
id: mapa_mental
title: Mapas Mentais
---
 
## Introdução
 
<p align = "justify">
Mapa mental consiste em criar resumos cheios de símbolos, cores, setas e frases de efeito com o objetivo de organizar o conteúdo e facilitar associações entre as informações destacadas. Esse material é muito indicado para pessoas que têm facilidade de aprender de forma visual.
</p>
 
## Metodologia
 
<p align = "justify">
Usamos o mapa mental para demonstrar o que foi feito até agora (Pesquisas de legislação, qual metodologias foram usadas, definição do nosso 5W2H) e para representar o que deve ser feito em relação ao software e o porquê cada coisa deve ser feita. Usamos PlantUML pela facilidade de integração ao MkDocs e pela qualidade de representação do mapa mental.
</p>
 
## Mapa mental:

```plantuml
@startmindmap
<style>
mindmapDiagram {
    .projeto {
        BackgroundColor #1a237e
        FontColor white
        FontSize 18
    }
    .visao {
        BackgroundColor #e3f2fd
    }
    .requisitos {
        BackgroundColor #fff3e0
    }
    .metodo {
        BackgroundColor #f1f8e9
    }
    .legal {
        BackgroundColor #fce4ec
    }
}
</style>

* **Sistema de Validação de Estágios (Ibmec)** <<projeto>>

** Visão Geral <<visao>>
***_ Objetivo: Automatizar com IA e reduzir esforço
***_ Problema: Validação manual e inconsistência
***_ Escopo: Ciclo de envio, triagem e notificações
***_ Fora de Escopo: Gestão financeira e ponto

** Brainstorm e Requisitos <<requisitos>>
*** Fluxo do Aluno
****_ Checklist dinâmico e Modelos oficiais
****_ Acompanhamento de status
*** Fluxo do Coordenador
****_ Validação manual/híbrida
****_ Assinatura e encaminhamento
*** RFs Críticos
****_ **RF07** Análise por IA
****_ **RF08** Score de conformidade
****_ **RF01** Autenticação institucional

** Benefícios Esperados <<visao>>
***_ Agilidade e Transparência
***_ Confiabilidade Jurídica
***_ Experiência do Aluno/Coordenador

left side

** 5W2H <<metodo>>
*** What: Sistema integrado administrativo
*** Why: Otimizar validação de contratos
*** Who: Equipe Back-end
*** How: RUP/UP + Ferramentas Web

** Base Legal e Normativa <<legal>>
***_ **Lei 11.788/2008** (Assinatura Tripartite)
***_ Limites: 6h/dia e 30h/semana
***_ Relatório semestral obrigatório
***_ Processo 100% digital (Ibmec)

** Metodologia <<metodo>>
*** Estrutura
****_ RUP/UP + Kanban
****_ Django
*** Design Thinking
****_ Empatia -> Ideação -> Protótipo

** Entregáveis <<metodo>>
***_ Documento de Visão
***_ Protótipo de Baixa Fidelidade
***_ Pesquisa de Mercado

@enduml
```


## Conclusão
 
<p align = "justify">
Com esse mapa mental montado, sabemos o caminho a ser seguido e quais direções o projeto deve tomar.
</p>
 
## Referências

> PlantUML para Mapas Mentais. Disponível em: https://plantuml.com/mindmap-diagram


## Versionamento
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 09/04/2026 | 1.0 | Criação de documento | Bruno Norton, Christian Werneck, Gianluca Leonardi, Marcos Paulo Assunção, Maurício Gomes e Micael Dali |

