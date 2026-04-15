---
id: Requisitos
title: Requisitos
---

# 06 - Levantamento de Requisitos e Caso de Uso

**Sistema:** Sistema de Validação de Estágios

---

## 1. Identificação dos Stakeholders

* **Alunos:** Estudantes universitários que submetem contratos, termos e relatórios de estágio para validação e acompanham o status de suas solicitações.
* **Coordenadores (e Setor de Estágios):** Responsáveis por visualizar o painel gerencial das turmas, revisar os scores de conformidade gerados pelo sistema, aprovar documentos, solicitar retificações e aplicar a assinatura institucional.
* **Docentes Avaliadores (Professores Orientadores):** Responsáveis por ler os relatórios de estágio (parciais e finais), emitir o parecer técnico e registrar o conceito do aluno.
* **Empresas Concedentes:** Organizações que empregam os estagiários, cujas assinaturas e informações precisam ser validadas no sistema.

---

## 2. Requisitos Funcionais

| ID | Descrição | Prioridade |
| :--- | :--- | :--- |
| RF01 | O aluno deve poder realizar o upload de documentos de estágio (contratos, apólices, relatórios) através de formulários específicos. | Alta |
| RF02 | O sistema deve realizar uma triagem automatizada inicial nos documentos baseada na Lei nº 11.788/2008, gerando um "Score de Conformidade". | Alta |
| RF03 | O sistema deve listar as solicitações pendentes em um dashboard para o coordenador, com filtros por curso e status. | Alta |
| RF04 | O coordenador deve poder aprovar, reprovar ou solicitar retificações pontuais apontando os motivos para o aluno. | Alta |
| RF05 | O sistema deve prover uma interface de assinatura digital (termo de aceite com senha institucional) para formalização dos documentos. | Média |
| RF06 | O docente avaliador deve poder registrar seu parecer técnico e selecionar o conceito final (Aprovado, Reprovado) para um relatório. | Média |
| RF07 | O sistema deve centralizar e disponibilizar os modelos de documentos institucionais padronizados para download. | Baixa |
| RF08 | O sistema deve notificar (dashboard e/ou e-mail) alunos e coordenadores sobre atualizações de status e prazos próximos. | Média |

---

## 3. Requisitos Não Funcionais

* **Performance:** A triagem automatizada e a geração do score de conformidade inicial devem ocorrer de forma rápida, em até 15 segundos após a submissão do documento pelo aluno.
* **Segurança:** O acesso ao sistema deve ser restrito a usuários autenticados via login institucional, garantindo a proteção e a privacidade dos dados pessoais e acadêmicos transitados nos contratos.
* **Usabilidade:** A interface deve seguir princípios de design limpo e acessível, sendo plenamente responsiva para acesso via computadores e dispositivos móveis, facilitando a visualização de PDFs integrados.
* **Confiabilidade:** O sistema deve manter um histórico imutável das validações e assinaturas, garantindo o respaldo jurídico da documentação aprovada.
* **Disponibilidade:** O sistema deve estar operacional e escalável para suportar picos de acesso, especialmente durante os finais de semestre acadêmico, quando o volume de envio de relatórios é consideravelmente maior.