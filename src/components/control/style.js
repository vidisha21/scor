import { styled } from "styled-components";

const Wrapper = styled.section`

    .timeline{
        display : flex;
        overflow: auto;
        justify-content: flex-end;
        background-color: grey;
        max-width : 500px;
        margin : auto;
        }
         .timeline-item{
            min-width : 38px;
            height: 38px;
            text-align: center;
            line-height: 38px;
            border-radius: 19px;
            background : maroon;
            color : #fff;
            margin : 10px;
            font-size: 0.8rem;
          }
          .button-container{
            input{
                min-width : 120px;
                min-height: 90px;
            }
          }
          
`

export default Wrapper
