import styled from "styled-components";

export const HomeWrapper = styled.div`

  .grid-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    padding: 0px 5rem 0px 5rem;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
.amazing{
	color: #FF3209;
}

.col-1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.col-1 h3 {
    font-size: 1.7rem;
    /* text-transform: uppercase; */
}

.col-1 h1 {
    font-size: 5rem;
}

.col-1 p {
    font-size: 1.5rem;
    width: 80%;
}

.btns {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    display: inline; */
    display: flex;
    gap: 2rem;
    margin-top: 3rem;

}

.btn-1 {
    background-color: #FF3209;
    padding: 0.5rem 1.4rem 0.5rem 1.4rem;
    border-radius: 10px;
    font-size: 1.23rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-2 {
    border: 2px solid #FF3209;
    padding: 0.5rem 1.4rem 0.5rem 1.4rem;
    border-radius: 10px;
    font-size: 1.23rem;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.col-2 img {
    width: 100%;
}

@media only screen and (max-width:800px) {
    .grid-two {
        grid-template-columns: 1fr;
		padding: 0px 3rem 0px 3rem;

		/* margin-bottom: 50px; */

		h3{
			font-size: 16px;
		}
		h1{}
		p{
			font-size: 16px;
		}
		.col-1 h1 {
    font-size: 4rem;
}
    }


    .col-1 {
        grid-row-start: 2;
    }
.btn-1,.btn-2{
    Font-size:14px;
}

}

`;

export const ProductsWrapper = styled.div`
	margin-bottom: 200px;
	margin-top: 50px;
  .Wrapper {
    max-width: 1024px;
    margin: 0 auto;
  }

  select{
	padding: 10px;
	border: 1px solid #ff523b;
	border-radius: 6px;
  }

  .row{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-round;
	width: 90%;
	margin: 0 auto;
}
.row-2{
   justify-content:space-between;
  /* margin: 100px auto 50px; */
}


.product-block {
	.formerPrice{
		text-decoration: line-through;
	}
	.newPrice{
		color: #FF3209;
		margin-right: 10px;
	}

	.price{
		margin-top: 5px;
		margin-bottom: 5px;
	}
  }

  .container {
    padding: 4px 12px;

  }
  .product-btn {
    text-align: center;
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid #FF3209;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 12px;
    margin-top: 4px;
    transition: all 0.4s linear;
	margin-top: 15px;
  }

  .product-btn:hover {
    background-color: #ff523b;
    color: #fff;
  }

  .product-btn:hover:after {
    content: " »";
  }
  .btn{
	color: blue;
  }

  h2{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: 0 auto;
	padding-bottom: 30px;
  }

  ul{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: 0 auto;
	/* gap: 20px; */
	flex-wrap: wrap;
	row-gap: 20px;
	column-gap: 20px;
  }
  li h4,p,button{
	margin-left: 10px;
  }

  li{
	width: 380px;
	height: 400px;
	/* border: 1px solid blue; */
	border-radius: 6px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  li img{
	width: 100%;
	transition: all .6s ease-in-out;
	transform: scale(0.95);
  }

  li img:hover{
	transform: scale(1);
  }



  h2 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .spinner{
    border: 2px solid #f3f3f3;
    border-top: 3px solid orangered;
    border-bottom: 3px solid orangered;
    animation: spin 1s linear infinite;
}


.yy{
    width:100px;
    height:100px;
    background-color:#e6e6e6;
    position:relative ;
    border-radius:100%;
    margin:auto;

}
    @keyframes spin{
    0%{
        transform: rotate(0deg) scale(1);
    }
    25%{
          background: pink;
        }
    50%{
        transform: rotate(180deg) scale(1.1);
    }
    100%{
        transform: rotate(360deg) scale(1);

    }
}


.pgn-btn{
    /* margin: 0 auto 80px; */
	width: 90%;
	margin: 0 auto;
	margin-top: 40px;
}
.pgn-btn span{
    display: inline-block;
    border: 1px solid #ff523b;
    margin-left: 10px;
    width:40px;
    height:40px;
    line-height:40px;
    text-align: center;
    cursor: pointer;

}
.pgn-btn span:hover{
    background: #ff523b;
    color: #fff;

}




  @media screen and (max-width: 800px) {
	margin-top: 70px;

	select{
		margin-bottom: 10px;
	}

    ul {
      display: block;
      margin: 0;
      padding: 0;
    }
    ul li {
      display: block;
      width: 100%;
      margin-bottom: 18px;
    }
    .container {
      padding: 0;
    }

	.row{
        text-align:center;
    }
  }



`;
