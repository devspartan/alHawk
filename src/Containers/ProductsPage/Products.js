import React, { Component } from 'react'
import ProductMini from '../ProductMiniComp'
import ProductMiniContainer from '../ProductMiniContainer'
import styles from './productsCSS.module.css'
import SearchResultFilterComp from './SearchReultsFilterComp'


class Products extends Component {
    render() {
        return (
            <div className={styles.productsParentContainer} >
                <div className={styles.productsSizeNavBar}>

                </div>
                <div className={styles.productsMainDivParent} >

                    <SearchResultFilterComp />
                    <div className={styles.productsMainDiv}>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                    </div>
                    <div className={styles.productsMainDiv}>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        
                    </div>
                    <div className={styles.productsMainDiv}>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        <div className={styles.productsMainDivProductComp}>
                            <ProductMini />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Products
