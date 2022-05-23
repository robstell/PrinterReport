//const open = require('open')
const puppeteer = require('puppeteer')
const path = require("path");


const isPkg = typeof process.pkg !== 'undefined';
const chromiumExecutablePath = (isPkg
  ? puppeteer.executablePath().replace(
    
      /^.*?\\node_modules\\puppeteer\\\.local-chromium/,      //<------ That is for windows users, for linux users use:  /^.*?\/node_modules\/puppeteer\/\.local-chromium/ 
      path.join(path.dirname(process.execPath), 'chromium')   //<------ Folder name, use whatever you want

    )
  : puppeteer.executablePath()
);



const printer1_ip = "192.168.1.29";    const printer1_name = "COE"
const printer2_ip = "192.168.1.37";    const printer2_name = "Atendimento"
const printer3_ip = "192.168.1.32";    const printer3_name = "Diretoria"
const printer4_ip = "192.168.1.39";    const printer4_name = "Logistica"
const printer5_ip = "192.168.1.35";    const printer5_name = "Relacionamento"
const printer6_ip = "192.168.1.40";    const printer6_name = "Telefonia"
const printer7_ip = "192.168.1.30";    const printer7_name = "COF"
const printer8_ip = "192.168.1.31";    const printer8_name = "Auditorio"

const destination = "Z:\\Informatica\\#Portal\\Relatórios de Impressão"

const page_timeout = '8000'





/*
open(`http://${printer1}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer2}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer3}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer4}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer5}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer6}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer7}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
open(`http://${printer8}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)
*/








;(async () => {


    console.log('Gerando relatórios de impressão. Aguarde...')

    const browser = await puppeteer.launch(
    {

        executablePath: chromiumExecutablePath,
        headless: true

    })




    const page = await browser.newPage()



    

    //<-----------------------------------------------------------------------------------Printer 1
    try{
    
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer1_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer1_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer1_name}: OK`)

        
    }
      catch(TimeoutError){
        
        console.log(`Sem Contato: Impressora ${printer1_name}`)
            
    }



    
    //<-----------------------------------------------------------------------------------Printer 2
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer2_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer2_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer2_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer2_name}`)
            
    }




    //<-----------------------------------------------------------------------------------Printer 3
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer3_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer3_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer3_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer3_name}`)
            
    }



    
    //<-----------------------------------------------------------------------------------Printer 4
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer4_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer4_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer4_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer4_name}`)
            
    }



    
    //<-----------------------------------------------------------------------------------Printer 5
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer5_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer5_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer5_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer5_name}`)
            
    }



    
    //<-----------------------------------------------------------------------------------Printer 6
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer6_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer6_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer6_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer6_name}`)
            
    }



    
    //<-----------------------------------------------------------------------------------Printer 7
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer7_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer7_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer7_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer7_name}`)
            
    }



    
    //<-----------------------------------------------------------------------------------Printer 8
    try{
        
        await page.setDefaultNavigationTimeout(page_timeout)
        await page.goto(`http://${printer8_ip}/cgi-bin/dynamic/printer/config/reports/devicestatistics.html`)

        
        await page.pdf({

            printBackground: true,
            path: `${destination}\\${printer8_ip}.pdf`,
            format: "A4",
            margin: {

                top: "20px",
                bottom: "40px",
                left: "20px",
                right: "20px"

            }
        });


        console.log(`Impressora ${printer8_name}: OK`)

        
    }
    catch(TimeoutError){
            
        console.log(`Sem Contato: Impressora ${printer8_name}`)
            
    }

    
    await browser.close()


    console.log('\nTerminado!')
    console.log(`Relatórios salvos em \'${destination}\'`)
    console.log('Fechando em 1 minuto...')

    
    setTimeout(() => {  
    
        
    
     }, 60000)



 })()