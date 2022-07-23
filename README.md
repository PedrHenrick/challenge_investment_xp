# ****Olá**** <img src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" width="30px" height="30px"> ****Bem vindo ao repositório do desafio técnico de back-end da Xp!****

### 🗣️ Orientações:

<details>
 <summary><strong>🤔 O que esse projeto faz?</strong></summary>
    
  **O desafio técnico se baseia em uma API de investimentos onde temos que desenvolver um back-end que possibilite o usuário realizar as seguintes operações dentro do banco de dados:**

  - ### Register - Cadastrar-se: /cadastro

    - Nessa rota será possível que o usuário se cadastre na plataforma, gerando o nosso hash/token JWT.
    - Para o funcionamento padrão é necessário fazer uma requisição post passando os dados em JSON, com a seguinte estrutura:

    ```json
    {
     "fullName": "Nome do usuário",
     "email": "teste@teste.com",
     "password": "senha"
    }
    ```

    Se tudo estiver ok, será retornado um token;

   - ### Login - Entrar: /login

     - Nessa rota será possível que o usuário se cadastre na plataforma, gerando o nosso hash/token JWT.
     - Para o funcionamento padrão é necessário fazer uma requisição post passando os dados em JSON, com a seguinte estrutura:

     ```json
     {
      "email": "teste@teste.com",
      "password": "senha"
     }
     ```

     Se tudo estiver ok, será retornado um token;

   - ### Find by all assets - Buscar por todos os ativos: /ativos

     - Com esse método, será retornado todas os ativos existentes no nosso banco de dados de simulação. Lembre-se de estar com o token na aplicação
     - Virá algo parecido com isso:

     ```json
     [
         {
             "codAtivo": 2,
             "NomeAtivo": "GOLL4",
             "QtdeAtivo": 200,
             "Valor": "128.24"
         },
         {
             "codAtivo": 8,
             "NomeAtivo": "NTCO3",
             "QtdeAtivo": 200,
             "Valor": "109.26"
         },
         {
             "codAtivo": 14,
             "NomeAtivo": "BBDC4",
             "QtdeAtivo": 200,
             "Valor": "69.63"
         },
         {
             "codAtivo": 3,
             "NomeAtivo": "BIDI11",
             "QtdeAtivo": 200,
             "Valor": "85.06"
         },
         {
             "codAtivo": 5,
             "NomeAtivo": "SULA11",
             "QtdeAtivo": 200,
             "Valor": "98.71"
         },
         {
             "codAtivo": 1,
             "NomeAtivo": "ABEV3",
             "QtdeAtivo": 200,
             "Valor": "87.69"
         },
         {
             "codAtivo": 4,
             "NomeAtivo": "AMER3",
             "QtdeAtivo": 200,
             "Valor": "80.13"
         },
         {
             "codAtivo": 10,
             "NomeAtivo": "RADL3",
             "QtdeAtivo": 200,
             "Valor": "88.48"
         },
         {
             "codAtivo": 11,
             "NomeAtivo": "XP",
             "QtdeAtivo": 390,
             "Valor": "110.27"
         },
         {
             "codAtivo": 9,
             "NomeAtivo": "BRKM5",
             "QtdeAtivo": 200,
             "Valor": "91.18"
         },
         {
             "codAtivo": 13,
             "NomeAtivo": "MGLU3",
             "QtdeAtivo": 200,
             "Valor": "119.43"
         },
         {
             "codAtivo": 15,
             "NomeAtivo": "PETR4",
             "QtdeAtivo": 200,
             "Valor": "76.88"
         },
         {
             "codAtivo": 6,
             "NomeAtivo": "CIELO",
             "QtdeAtivo": 200,
             "Valor": "79.34"
         },
         {
             "codAtivo": 7,
             "NomeAtivo": "MRVE3",
             "QtdeAtivo": 200,
             "Valor": "108.12"
         },
         {
             "codAtivo": 12,
             "NomeAtivo": "HAPV3",
             "QtdeAtivo": 200,
             "Valor": "132"
         }
     ]
     ```

   - ### Find by one asset - Buscar por um ativo: /ativos/{cod-ativo}

     - Com esse método será retornado apenas a ação específica pedida, algo como:

     ```json
     {
         "codAtivo": 2,
         "NomeAtivo": "GOLL4",
         "QtdeAtivo": 200,
         "Valor": "128.24"
     }
     ```

     Lembre-se de estar com o token na aplicação!

   - ### Cash deposit - Depositar dinheiro: /cliente/deposito

     - Com esse método iremos adicionar dinheiro na conta do cliente, para isso, passaremos apenas o valor que queremos adicionar:

     ```json
     {
         "Valor": 120000
     }
     ```

     Lembre-se de estar com o token na aplicação!

   - ### Withdraw money - Retirar dinheiro: /cliente/saque

     - Com esse método iremos sacar dinheiro na conta do cliente, para isso, passaremos apenas o valor que queremos sacar:

     ```json
     {
         "Valor": 6000
     }
     ```

     Lembre-se de estar com o token na aplicação!

   - ### Check balance - Consultar saldo: /cliente/saldo

     - Com esse método iremos receber um saldo da conta do cliente, não passamos nada, apenas faremos a requisição na rota:

     ```json
     {
         "Saldo": 6000
     }
     ```

     Lembre-se de estar com o token na aplicação!

   - ### Consult purchased shares - Consultar ações compradas: /cliente/ativos

     - Com esse método iremos receber um saldo do valor, não passamos nada, apenas faremos a requisição na rota:

     ```json
     [
         {
             "CodCliente": 2,
             "CodAtivo": 11,
             "QtdeAtivo": 10,
             "Valor": "108.07"
         },
         {
             "CodCliente": 2,
             "CodAtivo": 5,
             "QtdeAtivo": 10,
             "Valor": "95.75"
         }
     ]
     ```

     Lembre-se de estar com o token na aplicação!

   - ### Buy an asset - Comprar um ativo: /investimento/comprar

     - Com esse método iremos comprar uma quantidade de ações, para isso, precisamos adicionar os seguintes dados para a compra:

     ```json
     {
         "codAtivo": 5,
         "qtdeAtivo": 10
     }
     ```

     Lembre-se de estar com o token na aplicação!

   - ### Sell an asset - Vender um ativo: /investimento/vender

     - Com esse método iremos vender uma quantidade de ações, para isso, precisamos adicionar os seguintes dados para a venda:

     ```json
     {
         "codAtivo": 5,
         "qtdeAtivo": 10
     }
     ```

     Lembre-se de estar com o token na aplicação!

</details>
<details>
 <summary><strong>🔧 Quais ferramentas foram utilizadas?</strong></summary>

  - Linguagens:

      > Typescript
      > 
  - Ambiente de execução:

      > node.js, nodemon
      > 
  - Frameworks:

      > Express, Express-async-errors
      > 
  - Banco de dados:

      > Postgres
      > 
  - ORM:

      > TypeORM
      > 
  - Criptografia:

      > JsonWebToken, Bcrypt
      > 
  - Requisições HTTP:

      > Axios, cors
      > 
  - Validações:

      > JOI
      > 
  - Esteira de atividades:

      > Cron
      > 
  - Variáveis de ambiente:

      > Dotenv
      >
        
</details>
<details>
 <summary><strong>⚙️ O que precisamos para que tudo funcione bem?</strong></summary>
   
  - [ ] Para clonar a nossa aplicação utilizaremos o método SSH, e caso não tenha entre neste link de [chave ssh](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) para aprender como criar e configurar. Caso queira fazer uma forma alternativa utilize o [método https](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) mas a forma de clonagem utilizada não aborda esse método.

  - [ ] Para rodar a aplicação, teremos a forma de rodar o mesmo localmente na sua máquina, ou  utilizando um container do docker, e para isso é necessário ter o mesmo instalado e configurado. [Aqui esta um link](https://blog.betrybe.com/tecnologia/docker/), onde você pode fazer essas configurações
 
 </details>
 <details>
 <summary><strong>🚨 O que fazer quando encontrar erros?</strong></summary>
    
  **Caso encontre algum erro referente a sintaxe ou funcionamento do mesmo, abra uma *Issue***

   1.  Para iniciarmos, clique em **issues** como na foto abaixo:

       ![https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/issue.png](https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/issue.png)

   2. Após isso, clique em **new issue**:

       ![https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/new_issue.png](https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/new_issue.png)

   3. Agora adicione um título sobre problema encontrado e adicione uma descrição mostrando como ocorreu o erro. Por fim clique no botão **submit new issue**:

       ![https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/issue_form.png](https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/issue_form.png)

   4. E pronto, o problema já foi documentado e será resolvido o mais rápido possível.

       ![https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/issue_post.png](https://github.com/PedrHenrick/Project-All-For-One/raw/pedro-henrick-project-mysql-all-for-one/images/issue_post.png)
</details>
<details>
 <summary><strong>💌 O que fazer após o code-review?</strong></summary>
 
   <h4> Após o seu review sobre tudo o que foi abordado, deixo como sugestão responder este [formulário de feedback](https://forms.gle/ZJjEZNEAuc9QUauY9), desenvolvido por mim para auxiliar na melhoria desse e de outros projetos. </h4>
   <h4> Aguardo sua resposta, obrigado! </h4> 

</details>    

---

### 🔄 **Como clonar os arquivos e rodar a aplicação:**

**Para que essa aplicação funcione na sua máquina, será necessário seguir os seguintes passos:**

1. Abra o CMD/terminal de comando do seu sistema através da pesquisa e faça os seguintes passo: 
    1. Se você utiliza `linux` em português, digite `cd Área\ de\ Trabalho`
    2. Caso utilize o `windows` ou linux em inglês, digite `cd desktop`
2. Agora que estamos área de trabalho, no terminal utilize o comando `git clone git@github.com:PedrHenrick/challenge_investment_xp.git` para clonar a pasta do repositório
3. Logo depois entre na pasta clonada utilizando o comando `cd challenge_investment_xp`
4. Dentro da pasta, execute o comando `npm install` para instalar todas as dependências do projeto
5. Para rodar a aplicação no terminal digite o comando `npm start`. Caso prefira, você também pode rodar a aplicação utilizando o docker, basta rodar o comando `docker-compose-up -d --build` 

**E pronto! Já temos nossa aplicação na sua máquina e rodando. Agora você já pode fechar o terminal!**

---

### 🧑‍⚖️ Tomada de decisão:

- Para esse projeto, inicialmente achei de extrema importância decidir qual seria o ecossistema de tecnologias que eu poderia usar com as ferramentas que tinha em mãos, ferramentas essas listada na aba **ferramentas utilizadas**.
- Após essa definição, tive que definir como ficaria o banco de dados que eu iria utilizar, uma vez que o mesmo deveria ser construído para o encaminhamento e conclusão do projeto. Trago um exemplo final dele com o DER - diagrama de entidade e relacionamento
- Já com as ferramentas separadas e com o diagrama montado, separei um tempo para:
    - Definir o modelo de organização de pastas que eu iria utilizar, sendo o MSC o escolhido
    - Definir quais seriam as regras de negócio para as rotas
    - Verificar como iriam ficar as estruturas das rotas,
    - Como seria a estruturação dos retornos, uma vez que seria necessário a serialização dos dados que chegam do banco
    - Definir possíveis features novas, onde algumas, vieram a ser implementadas durante o desenvolvimento.
- Tentei seguir em todo o momento durante o desenvolvimento da aplicação, algo que fosse mais próximo do que foi pedido também no front-end, facilitando as informações passadas, teve alguns momentos onde as informações do diagrama que foi apresentado não se encaixariam, então decidir realizar algumas mudanças para o melhor funcionamento da aplicação.

---

### 🛣️ Como verificar as rotas:

Para a verificação das rotas, é necessário o uso de algum programa que consiga fazer essas requisições nas rotas. Para facilitar isso, trago algumas opções:

- Postman - O postman foi usado em toda a nossa aplicação, onde no mesmo também foi criado uma estrutura de pastas já com as requisições definidas, segue estrutura [neste link](https://app.getpostman.com/join-team?invite_code=229048e342484b215423a305b1613986&target_code=d11502a7df5cf3021f69d6bd21e760cb)
- Swagger - Também é possivel utilizar a nossa documentação detalhada do swagger, facilitando o uso das rotas

---

### 🆙 Próximas atualizações:

Para a evolução o projeto, fica claro algumas modificações que devem serem feitas. São elas:

- [ ]  Adicionar testes unitários mais completos
- [ ]  Adicionar testes de integração mais completos
- [ ]  Melhorar lógica de recompra de ativos, ou seja, quando um cliente compra um ativo mais de uma vez, pois que os valores se modificam aleatóriamente e a primeira compra pode não ter o mesmo valor da segunda, gerando uma compra extra de ações, com dois valores.
- [ ]  Melhorar tipagem com typescript
- [ ]  Aplicar o SOLID
- [ ]  Melhorar estrutura das classes

---

### ⚠️ ATENÇÃO ⚠️

- Sempre verifique se você está com o seu token nas rotas, é a partir dele que você conseguirá executar as requisições sem o menor problema.
- Foi usado na construção da aplicação um método de atualização automática dos valores do banco de dados, não é nenhum bug da API a cada 5 segundos os valores podem diminuir e aumentar aleatoriamente
