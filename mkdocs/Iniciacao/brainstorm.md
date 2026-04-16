---
id: brainstorm
title: Brainstorm
---
 
## Introdução

O brainstorm é uma técnica de elicitação de requisitos que consiste em reunir a equipe e discutir sobre diversos tópicos gerais do projeto apresentados no documento problema de negócio. No brainstorm o diálogo é incentivado e críticas são evitadas para permitir que todos colaborem com suas próprias ideias.
 
## Metodologia

A equipe se reuniu para debater ideias gerais no 01/04/2026 sobre o projeto via Discord, começou 19:30 e terminou 21:20, onde Christian e Gianluca foram os moderadores, direcionando a equipe com questões pré-elaboradas, e transcrevendo as respostas para o documento.
 
## Brainstorm
 
## Versão 1.0
 
## Perguntas
 
### 1. Qual o objetivo principal da aplicação?
 
**Christian** - Deve ser uma plataforma onde estudantes do ibmec possam enviar documentos para que seja feita a validação de contratos e relátorios de estágio.

**Gianluca** - A plataforma deve fornecer uma validação automática dos documentos.
 
**Bruno** - O principal objetivo da aplicação é facilitar validação de estagio para ambos os alunos e coordenadores, agilizando o processo.
 
### 2. Como será o processo de envio de documentos?
 
**Bruno** - O aluno deve abrir uma solicitação indicando seu curso e campus.
 
**Christian** - O aplicativo deverá indicar quais documentos são necessários do curso específico do aluno.

**Christian** - O aplicativo deve fornecer ao aluno, modelos dos documentos a serem enviados.
 
**Gianluca** - O aluno deverá enviar todos os documentos solicitados pelo aplicativo.
 
### 3. Como será feito o acesso para alunos e coordenadores?
 
**Gianluca** - O Login deve ser feito pelo email da instituição, para ambos aluno e coordenador.
 
**Bruno** - A interface do aluno e do coordenador deverão ser diferentes, onde o aluno poderá apenas mandar solicitações/documentos e o coordenador poderá visualizar todas as solicitações feitas por estudantes de seu curso.
 
### 4.  Como será feita a validação?

**Christian** - A avaliação será feita por uma inteligência artificial que seguirá as Leis do Estágio, as Leis do Trabalho e também seguindo as normas no mec.
 
**Bruno** - A inteligência artificial deverá verificar a porcentagem de validez de cada contrato a fim de alertar o coordenador, para que ele faça a validação manual.
 
### 5. Quais as funções do coordenador na plataforma?
**Gianluca** - O coordenador terá a função de chegar às pedidos feitos pelos estudantes, além de poder validar manualmente os documentos caso o sistema apresente algum erro na validação.

**Bruno** - O coordenador pode fazer alterações nos documentos modelos caso haja necessidade.
 
### 6. Quando e como os estudantes recebem a verifição dos documentos?
   **Gianluca** - Após a validação, o coordenador do curso deve assinar os documentos e logo depois mandar para a reitoria para que ela assine.
   
   **Christian** - A cada etapa do processo o estudante é notificado pelo aplicativo e e-mail.

## 1. Elicitação de Requisitos 
 A partir das definições do brainstorm, foram derivados os seguintes requisitos técnicos: 

### 1. 1 Requisitos Funcionais (RF)
| ID | Requisito | Descrição |
|:---|:---|:---| 
| **RF01** | Autenticação Institucional | O login deve ser restrito ao e-mail institucional (@ibmec). |
| **RF02** | Perfis de Usuário | O sistema deve distinguir entre permissões de Aluno e Coordenador. |
| **RF03** | Abertura de Solicitação | O aluno deve selecionar Curso e Campus ao iniciar o processo. |
| **RF04** | Check-list Dinâmico | Exibir documentos obrigatórios conforme o curso selecionado. |
| **RF05** | Repositório de Modelos | Disponibilizar download de templates oficiais para os alunos. |
| **RF06** | Upload de Documentos | Permitir o envio de arquivos para a plataforma. |
| **RF07** | Análise por IA | Processar documentos automaticamente via Inteligência Artificial. |
| **RF08** | Score de Validez | Exibir indicador percentual de conformidade do documento. |
| **RF09** | Gestão de Fluxo | Permitir ao coordenador assinar e encaminhar para a reitoria. |
| **RF10** | Notificações | Enviar alertas automáticos por e-mail e push a cada mudança de status. |

### 1.2 Requisitos Não Funcionais (RNF)
| ID | Requisito | Categoria | Descrição |
|:---|:---|:---|:---|
| **RNF01** | Conformidade Legal | Regra de Negócio | A IA deve seguir estritamente as leis de estágio e normas do MEC. |
| **RNF02** | Segurança | Acesso | A integração com o e-mail institucional deve ser segura e criptografada. |
| **RNF03** | Usabilidade | Interface | A interface deve ser intuitiva, separando claramente as visões de aluno e docente. |
| **RNF04** | Escalabilidade | Desempenho | O sistema deve suportar o processamento simultâneo de múltiplos documentos. |  

## Conclusão
Através da aplicação da técnica, foi possível elicitar alguns dos primeiros requisitos do projeto.
 
## Autor(es)
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 01/04/2026 | 1.0 | Criação de documento | Bruno Norton, Christian Werneck, Gianluca Leonardi, Marcos Paulo Assunção, Maurício Gomes e Micael Dali |
