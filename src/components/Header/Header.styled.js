import styled from "styled-components"

export const HeaderContainer = styled.header`
display:flex;
justify-content:space-between;
align-items:center ;

padding:12px;

    div.sender-profile{
        display:flex;
        align-items:center;
     
        


        > img {
            width:50px;
            border-radius:50%;
        }

        div {
            margin-left:8px;
        }
        
    }
    
    div.action-menu{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:135px;




        button{
            border-radius:50%;
            width:38px;
            height:38px;
            background-color:#f8f8f8;
            border:none;

            display:flex;
            justify-content:center;
            align-items:center;

            :hover{
                cursor: pointer;
                filter:brightness(0.95)
                
            }
            :active{
                filter:brightness(0.85)
            }


        }
        img{

        }


    }



`

export const Select =styled.select`
font-weight:700;
font-size:16px;

border:none;


`
export const Status = styled.p`
font-weight:500;
font-size:12px;
color:#B9BEC3;
padding-left:4px;

`
