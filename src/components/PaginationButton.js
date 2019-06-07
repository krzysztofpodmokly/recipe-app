import React from 'react';

const PaginationButton = (props) => {
    return (
        <div class="ui animated button" tabindex="0">
            <div class="visible content">Next</div>
            <div class="hidden content">
                <i class="right arrow icon"></i>
            </div>
        </div>
    );
};

export default PaginationButton;