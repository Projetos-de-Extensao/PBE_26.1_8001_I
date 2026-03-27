---
id: pesquisa
title: Pesquisa
---

# Pesquisa

## Contexto do Projeto

A validação de contratos e relatórios de estágio em universidades é um processo fundamental para garantir conformidade com as normas institucionais e com a Lei do Estágio. Atualmente, essa atividade é realizada, em grande parte, de forma manual, o que pode gerar inconsistências, subjetividade e alto custo operacional.

Diante disso, surge a oportunidade de desenvolver um sistema automatizado para auxiliar na análise desses documentos, verificando a adequação das atividades realizadas pelos alunos durante o estágio e apoiando a tomada de decisão, com maior eficiência, rigor, e padronização.

## Objetivo

Desenvolver um sistema capaz de validar contratos e relatórios de estágio de forma automatizada, verificando sua conformidade com as normas institucionais e com a Lei do Estágio (Lei nº 11.788/2008). O sistema deverá apoiar a análise das atividades realizadas pelos alunos, aumentar a padronização do processo e reduzir o esforço operacional envolvido na validação de documentos.

## Público-Alvo

Os principais beneficiários do sistema seriam os coordenadores de curso, setores administrativos responsáveis pela gestão de estágios e docentes avaliadores, que atuam na validação de contratos e relatórios em universidades brasileiras. Porém indiretamente, o sistema também impacta estudantes e empresas concedentes, ao criar maior transparência, agilidade e padronização no processo de avaliação dos estágios.

## Escopo e Limites do Projeto

O projeto consiste no desenvolvimento de um sistema para gerenciar o ciclo de vida do processo seletivo de monitores acadêmicos. O escopo do projeto abrange a criação e publicação de vagas por professores ou coordenadores, a submissão de candidaturas por parte dos alunos, incluindo envio de histórico escolar e pré-requisitos, e a triagem e avaliação feita pelos professores. O sistema também deverá gerar relatórios de classificação final e notificar os alunos sobre os resultados.

Para manter o foco do projeto, o sistema não realizará a gestão financeira ou o pagamento de bolsas de monitoria. Além disso, o sistema não fará o controle de ponto, horas trabalhadas ou gestão das atividades diárias do monitor após sua aprovação, limitando-se estritamente à gestão das vagas e do processo seletivo.

## Análise de Aplicações e Mercado

Atualmente, o mercado de softwares educacionais é dominado por grandes sistemas de Planejamento de Recursos Empresariais (ERP na sigla em inglês) adaptados para o meio acadêmico, como o JACAD ou o TOTVS Educacional. Esses softwares, ainda que robustos, costumam ter módulos de monitoria engessados e de usabilidade ruim. Como resultado, muitas coordenações de curso recorrem a soluções genéricas e descentralizadas, como formulários do Google Forms, planilhas do Excel e trocas de e-mails, o que gera perda de dados, falta de transparência e retrabalho operacional.

Plataformas de recrutamento corporativo como o Vagas.com são financeiramente inviáveis e mal adaptadas para o contexto acadêmico, que exige validações específicas como nota mínima em disciplinas pré-requisito e verificação de matrícula. Portanto, há uma clara lacuna de mercado para uma aplicação de nicho: uma ferramenta leve, intuitiva e focada especificamente nas regras de negócio da faculdade, que centralize a comunicação entre alunos e professores e traga agilidade para os editais de monitoria.

## Legislação

A fundamentação jurídica central para a validação dos documentos reside na Lei do Estágio já mencionada anteriormente, que define o estágio como um ato educativo escolar supervisionado, desenvolvido no ambiente de trabalho. Para que o sistema assegure a conformidade, ele deve verificar os requisitos formais essenciais: a celebração do Termo de Compromisso de Estágio (TCE) entre o educando, a parte concedente e a instituição de ensino, a existência de uma apólice de seguro contra acidentes pessoais e a compatibilidade das atividades previstas com o projeto pedagógico do curso. Além disso, a legislação exige a emissão periódica de relatórios de atividades (com periodicidade mínima de seis meses), documento este que constitui o objeto principal da automação de análise pretendida neste projeto.

## Legislação Trabalhista

Embora o estágio, por definição legal, não crie vínculo empregatício de qualquer natureza, a sua descaracterização pode acarretar severas sanções trabalhistas para as empresas e responsabilidade subsidiária para as instituições de ensino. O sistema deve monitorar rigorosamente os limites da Consolidação das Leis do Trabalho (CLT) que são excepcionados pela Lei do Estágio, especificamente quanto à carga horária máxima (limitada a 6 horas diárias e 30 horas semanais) e ao direito ao recesso remunerado após 12 meses de vigência. A automação visa amenizar o risco de "fraude ao estágio", garantindo que as atividades executadas não possuam natureza meramente produtiva ou operacional desassociada do ensino, o que, perante a Justiça do Trabalho, ocasionaria no reconhecimento de relação de emprego plena com todos os encargos retroativos.

## Normas do MEC para Validação de Estágios

### Natureza do Estágio

O estágio deve ser um **ato educativo escolar supervisionado**, sem vínculo empregatício, integrando o projeto pedagógico do curso (PPC).

---

### Requisitos Contratuais (TCE)

**Elementos obrigatórios:**

- **Matrícula e frequência** regular do aluno
- **Assinatura tripartite:** Aluno, instituição de ensino e empresa concedente
- **Plano de atividades** compatível com o curso
- **Seguro** contra acidentes pessoais obrigatório

---

### Jornada de Trabalho

**Limites de carga horária:**

- Máximo de **6 horas diárias** (30h semanais) para ensino superior
- **Redução pela metade** em períodos de avaliação acadêmica

---

### Relatórios e Supervisão

**Relatórios de Atividades:**

- Entrega obrigatória em prazo **não superior a 6 meses**
- Devem ser assinados por:
    - Aluno
    - Supervisor da empresa
    - Professor orientador (validação)

**Supervisão:**

- Limite de **10 estagiários por supervisor** na empresa concedente

---

### Assinaturas Eletrônicas

Documentos podem ser assinados eletronicamente via:

- **GOV.BR** (nível prata ou ouro)
- Certificados **ICP-Brasil**

---

### Novidades da Lei nº 14.913/2024

**Novas possibilidades:**

- Equiparação de **extensão, monitoria e iniciação científica** ao estágio (se previsto no PPC)
- Regulamentação de estágios em **intercâmbios internacionais**

---

### Riscos do Descumprimento

> **Atenção:** A falta de qualquer requisito (como assinaturas ou relatórios) gera a **nulidade do estágio**, podendo configurar vínculo empregatício (CLT) e possíveis sanções do MEC para a instituição.

## Diretrizes de Validação de Estágio – Ibmec

O Ibmec adota um processo moderno e digital para validação de estágios, garantindo conformidade legal, segurança jurídica e eficiência no reconhecimento das horas de estágio.

---

### Processo de Validação

### Formalização 100% Digital

O Ibmec substituiu completamente os processos físicos pela tramitação digital de documentos através de plataformas oficiais.

**Características:**

- Preenchimento online de todos os formulários
- Tramitação eletrônica de documentos
- Acompanhamento em tempo real do status da validação
- Eliminação de processos em papel

---

### Assinatura Digital Obrigatória

Todos os documentos exigem certificação digital para garantir validade jurídica.

**Padrões aceitos:**

- **ICP-Brasil** (Infraestrutura de Chaves Públicas Brasileira)
- **Gov.br** (plataforma governamental)

**Documentos que requerem assinatura digital:**

- Termo de Compromisso de Estágio (TCE)
- Plano de Atividades

---

### Fluxo de Aprovação Bilateral

O processo de validação requer aprovação de ambas as partes envolvidas.

**Etapas de aprovação:**

1. **Discente:** Anuência eletrônica do estudante
2. **Empresa:** Aprovação do responsável legal ou RH da empresa contratante
3. **Instituição:** Validação final pela Coordenação de Carreiras do Ibmec

---

### Requisitos de Conformidade

### Conformidade Acadêmica

A validação de estágio é **pré-requisito obrigatório** para:

- Reconhecimento das horas de estágio no currículo
- Cumprimento das normas da Coordenação de Carreiras
- Integralização de atividades complementares (quando aplicável)

> **Importante:** Sem a validação formal, as horas de estágio não serão computadas no histórico acadêmico.

---

### Integridade de Dados

O sistema garante a autenticidade e veracidade das informações declaradas.

**Informações validadas:**

- Função exercida no estágio (ex: Desenvolvedor Backend, Analista de Dados, etc.)
- Competências técnicas e comportamentais a serem desenvolvidas
- Aderência das atividades ao projeto pedagógico do curso
- Carga horária e período de realização

---
## Validação de Estágios em outras instituições

A validação de estágios na ESPM é um processo **100% digital** realizado pela plataforma **Symplicity**, focado na conformidade legal e pedagógica.

---

### Documentos Essenciais

#### Contrato de Estágio (TCE)

**Prazo de envio:**

- Antes do início do estágio, ou
- Até **30 dias** após o começo da atividade

**Requisitos obrigatórios:**

- Jornada de no máximo **6h diárias** (30h semanais)
- Seguro contra acidentes pessoais
- Bolsa-auxílio (para estágios não obrigatórios)
- Plano de atividades compatível com o curso

---

#### Relatórios de Atividades (RAE)

**Periodicidade:**

- A cada **6 meses** durante o estágio
- No término do contrato
- Em caso de rescisão antecipada

**Finalidade:** Validar a continuidade pedagógica da experiência de estágio.

---

### Processo de Assinatura Digital

O processo utiliza **exclusivamente assinaturas eletrônicas** (como DocuSign):

1. Aluno assina primeiro
2. Empresa assina em seguida
3. ESPM é a última a assinar

**Prazo:** Até **3 dias úteis** para análise e assinatura pela ESPM.

---

### Validação de Horas Complementares (ACOM)

> **Importante:** A validação das horas de estágio para o currículo **não é automática**.

**Como solicitar:**

1. Acesse o **Portal do Estudante**
2. Navegue até: `Requerimentos` → `Acadêmico`
3. Abra um novo requerimento
4. Anexe o **contrato de estágio** ou **carteira de trabalho**

---

