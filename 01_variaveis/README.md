# Variáveis

Utilizada para armazenar valores, é possível declará-las de três maneiras diferentes, utilizando `var, let e const`.

- var: a variável é declarada e inicializada no escopo da função, `não respeitando bloco, permitindo a redeclaração e reatribuição`;
- let: a variável é declarada no escopo da função mas só é inicializada posteriormente, `respeitando bloco, permite reatribuição, mas não redeclaração`;
- const: a variável é declarada no escopo da função, `respeitando bloco, não permite reatribuição nem redeclaração`.

<br>

As variáveis possuem um ciclo de vida, envolvendo: `declaração, inicialização e atribuição`.

- declaração: nome da variável é registrado no contexto de execução, também conhecido como escopo;
- inicialização: após a declaração, a variável é inicializada, seu valor padrão é `undefined`;
- atribuição: quando um valor específico é atribuído para a variável.

<br>

O nome da variável deve seguir um padrão. Um identificador válido deve começar com `[a-zA-Z_$]` seguido por `[a-zA-Z0-9_$]`.
