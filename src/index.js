const userFactory = require("./factory/userFactory");

;(async() =>{
     const user = await userFactory.factory()
       
     const insert = await user.insertWithSecurity({
         nome:"Teste",
         email:"ricaa123a@gmail.com",
         CPF_CNPJ:"12343245422",
         logradouro:"SP",
         número:"712",
         bairro:"campos",
         localidade:"SAO PAULO",
         uf:"ola",
         complemento:"Ola",
         cep:"01206000",
         telefone:"1300"

     })

     console.log(insert)
 
 })()

 
