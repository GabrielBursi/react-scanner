import { useEffect, useState } from "react";
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md'
import { getBook } from "../services/getBook";
import { ActionsButtons, ContainerResult, Cover, Info, Wrapper } from "../styles";
import { Link } from "react-router-dom";
import { IBooks } from "../types";

interface ResultProps {
    isbn: string
}

export const Result = ({ isbn }: ResultProps) => {

    const [book, setBook] = useState<IBooks>();

    useEffect(() => {
        const loadBook = async () => {
            const res = await getBook(isbn)
            if (res instanceof Error) {
                alert('erro, ' + res.message)
                console.log('erro, ' + res.message);
                return
            }
            setBook(res)
        }
        loadBook()
    }, [isbn]);

    return (
        <ContainerResult>
            {book &&
                <Link to={`/book/details/${isbn}`}>
                    <Wrapper>
                        <Cover src={book.coverURL} />
                        <Info>
                            <h4 className="name">
                                {book.name}
                            </h4>
                            <div className="book-rating">
                                <StarRatings rating={book.rating} starRatedColor="#f1c40f" starDimension="18" starSpacing="0" />{' '}(4.0)
                            </div>
                            <div className="price">
                                <span className="discount">{book.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                por
                                <span>{book.promotionalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                        </Info>
                        <ActionsButtons>
                            <span className="button">
                                <MdArrowForward size={32} color="#fff" />
                            </span>
                        </ActionsButtons>
                    </Wrapper>
                </Link>
            }

        </ContainerResult>
    )
}
