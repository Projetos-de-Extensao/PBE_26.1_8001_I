# Projeto Back-End

**Código da Disciplina**: IBM8936<br>

## Sobre

Projeto de validação de vagas de estágio

## Configurando o Ambiente

### 1) Clonar o Repositório

No GitHub, vá até a página do nosso repositório (https://github.com/Projetos-de-Extensao/PBE_26.1_8001_I), procure o ícone verde de <> Code, clique nele e copie a URL do repositório

No VS Code, digite Ctrl/Cmd + Shift + P pra abrir a Paleta de Comandos e digite "Clone". Clique na opção de Git: Clone. Ele dará opção de clonar usando a URL ou, pelo menos, de clonar usando o GitHub. Coloque a pasta do repositório clonado onde você achar melhor e pronto

### 2) Criar o Ambiente Virtual

Antes de instalar qualquer coisa, abra a Paleta de Comandos de novo e digite "Python: Crate Environment". Clique nessa opção, escolha "venv" quando ele perguntar se você quer um ambiente venv ou conda, e o VS Code já deve mostrar a opção de "requirements.txt". Clique nela e, ao criar o venv, o VS Code já vai dar o nome dele de .venv, que é um nome padrão, e vai instalar tudo que está no requirements.txt sem você escrever um único comando de terminal

### 3) Usando o Django e o Mkdocs

#### a) Django

##### - Ative o Ambiente Virtual: No Windows, o comando é ".\venv\Scripts\activate"; no Mac/Linux, é "source venv/bin/activate". O PowerShell pode não permitir que o venv seja ativado. Mude para o CMD ou o GitBash. O GitBash já ativa automaticamente o Ambiente Virtual, é só abrir o terminal e esperar um pouco

##### -

**Pré-requisitos**: Ter pelo menos o Java Runtime Environment (JRE) e o Graphviz instalados para poder visualizar os diagramas de PlantUML
