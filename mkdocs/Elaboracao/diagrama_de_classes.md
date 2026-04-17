---
id: diagrama_de_classes
title: Diagrama de Classes
---

# Diagrama de Classes

## Introdução

O diagrama de classes é o diagrama UML mais usado principalmente por servir como uma ponte entre os requisitos do sistema e a implementanção em código, devido à sua estrutura similar à usada nas principais linguagens de programação com suporte a Orientação a Objeto, como Python e Java.

Além disso, o diagrama de classes funciona como uma representação visual geral de como o código do sistema vai ser implementado, como veremos no diagrama a seguir.

---

## Mapeamento das Classes do Sistema

```plantuml
@startuml
abstract class Usuario {
	+ nome: String
	+ email: String
	+ senhaInstitucional: String
}

class Aluno extends Usuario {
	+ matricula: String
	+ realizarUpload(doc: Documento): void
}

class Coordenador extends Usuario {
	+ aprovar(solicitacao: SolicitacaoEstagio): void
	+ rejeitar(solicitacao: SolicitacaoEstagio): void
	+ solicitarRetificacao(solicitacao: SolicitacaoEstagio, motivo: String): void
}

class Professor extends Usuario {
	+ registrarParecer(relatorio: Relatorio, parecer: ParecerTecnico): void
}

class SolicitacaoEstagio {
	+ id: int
	+ data: Date
	+ status: String
}

abstract class DocumentoPreenchido {
	+ id: int
	+ dataEnvio: Date
	+ scoreConformidade: float
	+ status: String
	+ realizarTriagemAutomatica(): void
}

class Contrato extends DocumentoPreenchido {}

class Apolice extends DocumentoPreenchido {}

class Relatorio extends DocumentoPreenchido {
	+ conceitoFinal: String
}

class ParecerTecnico {
	+ texto: String
    + data: Date
}

class AssinaturaDigital {
	+ dataHora: DateTime
	+ ipAcesso: String
	+ assinar(usuario: Usuario): void
}

class ModeloDocumento {
	+ titulo: String
	+ arquivoUrl: String
	+ baixarModelo(): File
}

class Notificacao {
	+ mensagem: String
	+ dataEnvio: Date
	+ enviar(usuario: Usuario):
}


Aluno "1" -- "*" SolicitacaoEstagio : cria >
Aluno "1" == "*" ModeloDocumento : preenche >
SolicitacaoEstagio "1" *-- "1..*" DocumentoPreenchido : contem >
Coordenador "1" -- "*" SolicitacaoEstagio : avalia >
Relatorio "1" -- "0..1" ParecerTecnico : possui >
Professor "1" -- "*" ParecerTecnico : emite >
AssinaturaDigital "*" -- "1" DocumentoPreenchido : formaliza >
Usuario "1" -- "*" AssinaturaDigital : realiza >
Notificacao "*" -- "1" Usuario : notifica >

@enduml
```

---

## Conclusão

Com o Diagrama de Classes pronto, a implementação dos modelos elaborados para descrever o funcionamento do sistema em código será muito mais fluida e direta, mantendo a estrtura de Orientação a Objetos e apenas traduzindo os detalhes de implementação para cada linguagem de programação.

---

## Autor(es)

| Data     | Versão | Descrição            | Autor(es)                                                                                              |
| -------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------------ |
| 01/04/26 | 1.0    | Criação do documento | Bruno Norton, Christian Werneck, Gianluca Leonardi, Marcos Paulo Assunção, Maurício Gomes, Micael Dali |
