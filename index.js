import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';

function GlobalStyle(){
    return(
        <style global jsx>{`
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                background-image: url(../imgs/rosa.jpg);
                list-syle: none;
            }
            body{
                font-family: 'Open Sans', sans-serif;
            }
            /* App fit Height */ 
            html, body, #__next {
              min-height: 100vh;
              display: flex;
              flex: 1;
            }
            #__next {
              flex: 1;
            }
            #__next > * {
              flex: 1;
            }
            /* ./App fit Height */ 
        `}</style>
    );
}

function Title(props) {
    const Tag = props.tag || h1;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals["900"]};
                    font-size: 3rem;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

// // componente React
// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyle />

//             <Title tag="h2">Boas Vindas de Volta</Title>
//             <h3> Discord - Alura Matrix</h3>
            
//         </div>
//     )
//   }
  
//   export default HomePage

export default function PaginaInicial() {
    //const username = 'Padilha1';
    const [username, setUsername]= React.useState('Padilha1');
    const roteamento = useRouter();

    return (
      <>
        <GlobalStyle />
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[900],
            backgroundImage: 'url(https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'screen',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 10px 15px 0 rgb(0 0 0 / 50%)',
              backgroundColor: appConfig.theme.colors.neutrals[50],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit ={function(infosDoEvento){
                infosDoEvento.preventDefault();
                // window.location.href='/chat';
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Wel come a gain love!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[500] }}>
                {appConfig.name}
              </Text>
  

              <TextField
                fullWidth
                value={username}
                onChange={function(event){
                    const valor = event.target.value;
                    setUsername(valor);
                  }}
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[300],
                    mainColor: appConfig.theme.colors.neutrals[100],
                    mainColorHighlight: appConfig.theme.colors.primary[100],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary["999"],
                  mainColorLight: appConfig.theme.colors.primary["100"],
                  mainColorStrong: appConfig.theme.colors.primary["900"],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[50],
                // border: '1px solid',
                // borderColor: appConfig.theme.colors.neutrals[50],
                
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                  boxShadow:'0 2px 10px 0 rgb(0 0 0 / 50%)',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[500],
                  fontSize: '1em',
                  backgroundColor: appConfig.theme.colors.neutrals[50],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }