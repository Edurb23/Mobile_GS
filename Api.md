# GLOBAL SOLUTION

## FIAP JARVIS 2TDSPV

### Funcionamento da API


### Nosso back-end
Nosso back-end foi feito pelo replit utilizando python : https://replit.com/join/tklfwurlcs-edurb

Contas que tem acesso : 
```json
{
    "karina@jarvis.com": "Geofísico123!",
    "sabrina@jarvis.com": "Biólogo456!",
    "lucas@jarvis.com": "Geólogo Marinho789!",
    "felipe@jarvis.com": "Geógrafo012!"
}
```

## Tela de login 

## Descrição

Este projeto é uma aplicação de login que utiliza React Native no front-end e PythoReplit no back-end. A aplicação permite que os usuários façam login com suas credenciais, recebam um token de autenticação e naveguem para a tela principal da aplicação.

## Front-End (React Native)

### LoginScreen Component

A tela de login (`LoginScreen`) permite que o usuário insira seu email e senha, e tente fazer login na aplicação. 

#### Principais Elementos

- **Usestate**
  - `email`: Armazena o email digitado pelo usuário.
  - `password`: Armazena a senha digitada pelo usuário.

- **function `handleLogin`**
  - Envia uma solicitação POST para a API no endpoint `/login` com `email` e `password` como payload.
  - Se a resposta da API incluir um token, armazena-o localmente usando `AsyncStorage` e navega para a tela "Home".
  - Em caso de falha no login (sem token na resposta), mostra um alerta com a mensagem "Login Failed".
  - Se ocorrer um erro durante a solicitação, exibe um alerta com a mensagem de erro.


### Endpoint `/login`

- **Método**: `POST`
- **Descrição**: Autentica o usuário com email e senha, gerando um token JWT se a autenticação for bem-sucedida.
- **Payload de entrada**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  },
    {
    "token": "jwt_token_here"
    }
   ```
### ERROR 
```json
{
  "message": "Invalid email or password"
}
 ```

 ### Funcionario

A tela de conta (`Conta`) permite que o usuário visualize informações sobre o funcionário.

#### Principais Elementos

- **Usestate**
  - `funcionario`: Armazena os dados do funcionário.
  - `loading`: Indica se os dados estão sendo carregados.

- **UseEffect**
  - Tenta obter o token armazenado no `AsyncStorage`.
  - Envia uma solicitação GET para a API no endpoint `/funcionarios` com o token no cabeçalho.
  - Armazena os dados do funcionário no estado `funcionario`.
  
 
 ### MissaoScreen Component

A tela de missão (`MissaoScreen`) permite que o usuário selecione funcionários, funções, drones e missões de listas predefinidas, e crie novas missões.

#### Principais Elementos

- **UseState**
  - `selectedFuncionario`, `selectedFuncao`, `selectedDrone`, `selectedMissao`: Armazena os itens selecionados pelo usuário para a nova missão.
  - `funcionarios`, `funcoes`, `drones`, `missoes`: Armazena as listas de funcionários, funções, drones e missões, obtidas da API.

- **UseEffect**
  - Obtém as listas de funcionários, funções, drones e missões da API ao montar o componente.

- **Function**
  - Cria uma nova missão enviando uma solicitação POST para a API no endpoint `/add/missao` com os dados da nova missão.


### ListaMissoes Component

A tela de lista de missões (`ListaMissoes`) permite que o usuário visualize todas as missões criadas.

#### Principais Elementos

- **UseState**
  - `missoes`: Armazena a lista de todas as missões obtidas da API.

- **useEffect**
  - Obtém a lista de todas as missões da API ao montar o componente.