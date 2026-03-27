# Projeto Back-End

**Código da Disciplina**: IBM8936<br>

## Sobre

Projeto de validação de vagas de estágio

## Configurando o Ambiente

### 1) Clonar o Repositório

No GitHub, vá até a página do nosso repositório (https://github.com/Projetos-de-Extensao/PBE_26.1_8001_I), procure o ícone verde de <> Code, clique nele e copie a URL do repositório

No VS Code, digite `Ctrl/Cmd + Shift + P` pra abrir a Paleta de Comandos e digite `Clone`. Clique na opção de `Git: Clone`. Ele dará opção de clonar usando a URL ou, pelo menos, de clonar usando o GitHub. Coloque a pasta do repositório clonado onde você achar melhor e pronto

### 2) Criar o Ambiente Virtual

Antes de instalar qualquer coisa, abra a Paleta de Comandos de novo e digite `Python: Create Environment`. Clique nessa opção, escolha `venv` quando ele perguntar se você quer um ambiente venv ou conda, e o VS Code já deve mostrar a opção de `requirements.txt`. Clique nela e, ao criar o venv, o VS Code já vai dar o nome dele de `.venv`, que é um nome padrão, e vai instalar tudo que está no `requirements.txt` sem você escrever um único comando de terminal

### 3) Usando o Django e o Mkdocs

#### a) Django

##### - Ative o Ambiente Virtual

No Windows:
```bash
.\venv\Scripts\activate
```

No Mac/Linux:
```bash
source venv/bin/activate
```

> O PowerShell pode não permitir que o venv seja ativado. Mude para o CMD ou o GitBash. O GitBash já ativa automaticamente o Ambiente Virtual, é só abrir o terminal e esperar um pouco.

##### - Atualizar o Banco de Dados

Importante: use `cd` no terminal para ir até a pasta `djangotuutorial`, onde está o arquivo `manage.py`. Caso contrário, os comandos abaixo não funcionam.

```bash
python manage.py migrate
```

##### - Iniciar o Servidor

```bash
python manage.py runserver
```

Por padrão, o servidor se inicia em `http://127.0.0.1:8000/`

#### b) Mkdocs

##### - Ative o Ambiente Virtual

##### - Iniciar o Servidor de Documentação

```bash
mkdocs serve
```

#### OBS: Rodando Django e MkDocs ao mesmo tempo

Como o Django e o MkDocs escolhem a porta 8000, rodar os dois ao mesmo tempo pode dar problema. Para evitar isso, abra dois terminais (clique no ícone de `+` no painel do terminal) e use:

Terminal 1 (Django):
```bash
python manage.py runserver 8000
```

Terminal 2 (MkDocs):
```bash
mkdocs serve -a localhost:8001
```

## Diagramas

A princípio, usaremos PlantUML, mas há uma pasta de diagramas dentro de `mkdocs/docs` onde diagramas de qualquer origem podem ser colocados. Para visualizar e criar os diagramas de PlantUML, é preciso ter o JRE ou o JDK instalado e o Graphviz
