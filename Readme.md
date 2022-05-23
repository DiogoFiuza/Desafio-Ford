<h1>Desafio Ford</h1>

<h2> <b>Objetivo</b> </h2>

<p>O objetivo do desafio é encriptar um VIN de forma a ficar mais seguro.</p>
<br/>

<h2><b>O que foi feito?</b></h2>


<h3> <b>Encriptar</b> </h3>

<p> Para atingir o objetivo foi utilizado a tabela ASCII para criptografar o dado recebido, pegando o código de cada caractere e seguindo duas casas a frente de acordo com a tabela ASCII. Caso fosse a última letra do alfabeto ou se o último número fosse 9, ele retornaria ao início, e por fim colocaria os dados de trás para frente. </p>


<h3> <b>Decriptar</b> </h3>

<p>Para decriptar os dados foi seguida a mesma ideia só que de forma reversa, andando dois números para trás tanto do código da letra como do código dos números, revertento o resultado para ficar de acordo com o VIN inicial.</p>