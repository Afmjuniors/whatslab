import styled from "styled-components"

export const FooterContainer = styled.main`
display:flex;
align-items:center;
justify-content:space-between;

padding:16px;

background-color:#F7F8FA;

div{
    background-color:white;
   
    border-radius:35px;
    padding:16px;
    width:490px;
    height:50px;

    box-shadow: 0px 10px 15px -5px rgba(92,92,92,0.26);

    display:flex;
    align-items:center;

    input{
        width:100%;
        border:none;
        margin: 0 8px;
        height:28px;
        padding: 0 4px;
        color: #78787c;;
    }

}

button{
    border:none;
    background-color:white;
    :hover{
        cursor:pointer;
        filter:brightness(0.95);
    }
    :active{
        filter:brightness(0.85);
    }
}

.emoji , .paperClip{
    width:32px;
    height:32px;

}

.paperClip{
    margin-left:auto;
}

.microphone{
    width: 50px;
    height:50px;
    background-color:#61C554;
    border-radius:50%;
    


    
}



`