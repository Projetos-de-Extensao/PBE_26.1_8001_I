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

abstract class DocumentoEstagio {
	+ id: int
	+ dataEnvio: Date
	+ scoreConformidade: float
	+ status: String
	+ realizarTriagemAutomatica(): void
}

class Contrato extends DocumentoEstagio {}

class Apolice extends DocumentoEstagio {}

class Relatorio extends DocumentoEstagio {
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


Aluno "1" -- "*" Solicitacao : cria >
Solicitacao "1" *-- "1..*" Documento : contem >
Coordenador "1" -- "*" Solicitacao : avalia >
Relatorio "1" -- "0..1" ParecerTecnico : possui >
DocenteAvaliador "1" -- "*" ParecerTecnico : emite >
AssinaturaDigital "*" -- "1" Documento : formaliza >
Usuario "1" -- "*" AssinaturaDigital : realiza >
Notificacao "*" -- "1" Usuario : notifica >

@enduml
```

---
