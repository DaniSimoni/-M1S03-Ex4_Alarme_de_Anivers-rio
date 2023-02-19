/* Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela deve dizer quantos dias faltam para chegar a data.
Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo. */





    setInterval (() => {
        
    const day = '2024-02-23';
    const inMounth = new Date(day) - new Date();
    const inDays = inMounth / (1000 * 60 * 60 * 24);
    console.log(inDays);

    if (inDays>0) {
        console.log(`Faltam ${inDays} dias para o seu aniversário.`);
    }else {
        console.log('Feliz Aniversário')
    }



    },3000);





