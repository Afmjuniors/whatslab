import styled from "styled-components"

export const MainContainer = styled.main`

flex-grow:1;
background-color:#F7F8FA;
padding:16px;

div{
    display:flex;
    flex-direction:column;
}



`
export const Chatballon = styled.div`



        border-radius:10px;
        padding:8px;
       
        min-width:80px;
        max-width:310px;



        margin: ${(props)=>
        (props.sender==="Me"?
        "0 0 16px auto":
        "0 auto 16px 0")};

        color:${(props)=>props.sender==="Me"?"white":"black"};

        background-color:${(props)=>props.sender==="Me"?"#61C554":"#E8ECEF"};

     



        h1{

            font-size:16px;
            font-weight:500;
            
        }
        p{
            font-weight:400;
            font-size:14px;
            margin-top:4px;
            overflow-wrap:break-word;


        }
        span{
            text-align:right;

            span{
                color:${(props)=>props.sender==="Me"? "white" : "#727272"};
                font-weight:400;
                font-size:11px;

            }
            img{
                margin-left:4px

            }

        }
    `