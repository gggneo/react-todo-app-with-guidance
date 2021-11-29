import React from 'react';
import { v4 as uuid} from 'uuid';

function Pagination({total, currentPage, onClickCallback}) {
    
    const pages = new Array(total).fill(0).map((page, i) =>
        currentPage === i+1 ? (<button disabled key={uuid()}>{i+1}</button>) : (<button key={uuid()} onClick={() => onClickCallback(i+1)}>{i+1}</button>))

    return (
        <div>
            {pages}
        </div>
    )
}

export default Pagination;
