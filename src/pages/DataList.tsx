
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { Image } from 'primereact/image';

interface Product {
    id: string;
    name: string;
    image: string;
    createdAt: string;
    status: string;
}

const data =  [
    {
        id: '1000',
        name: 'Bamboo Watch',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGtPL4nct4vMwwdcdudbUB0Yrsgf9Ks-ZUGa2pk9LuymLTipexk5e6j7kghDlCGnsaM&usqp=CAU',
        createdAt: '02.02.2025',
        status: 'DONE',
    },
    {
        id: '1001',
        name: 'Black Watch',
        image: 'https://dent-art.com.tr/wp-content/uploads/2021/07/xray-x-ray-2764828_1280-900x588.jpg',
        createdAt: '02.02.2025',
        status: 'CANCELED',
    },
    {
        id: '1002',
        name: 'Blue Band',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'RUNING',
    },
    {
        id: '1003',
        name: 'Blue T-Shirt',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'CANCELED',
    },
    {
        id: '1004',
        name: 'Bracelet',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'CANCELED',
    },
    {
        id: '1005',
        name: 'Brown Purse',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'DONE',
    },
    {
        id: '1006',
        name: 'Chakra Bracelet',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'DONE',
    },
    {
        id: '1007',
        name: 'Galaxy Earrings',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'DONE',
    },
    {
        id: '1008',
        name: 'Game Controller',
        image: 'https://dentamar.com.tr/_yuk/blogresim/panaromikrontgen.jpg',
        createdAt: '02.02.2025',
        status: 'DONE',
    },

];

export default function DataList() {
    const [products, setProducts] = useState<Product[]>(data);
    const [layout, setLayout] = useState<any>('grid');

    useEffect(() => {
    }, []);

    const getSeverity = (product:any) => {
        switch (product.status) {
            case 'DONE':
                return 'success';

            case 'RUNING':
                return 'warning';

            case 'CANCELED':
                return 'danger';

            default:
                return null;
        }
    };

    const listItem = (product: Product, index: number) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${product.image}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.createdAt}</span>
                                </span>
                                <Tag value={product.status} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <Button icon="pi pi-trash" className="p-button-rounded" severity='danger'></Button>
                        <Button icon="pi pi-search" className="p-button-rounded" disabled={product.status != 'DONE'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product: Product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-calendar"></i>
                            <span className="font-semibold">{product.createdAt}</span>
                        </div>
                        <Tag value={product.status} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <Image preview width='300' height='150' className="shadow-2 border-round" src={`${product.image}`} alt={product.name} />
                        <div className="text-2xl font-bold">{product.name}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                    <Button icon="pi pi-trash" className="p-button-rounded" severity='danger'></Button>
                    <Button icon="pi pi-search" className="p-button-rounded" disabled={product.status !== 'DONE'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate:any = (product: Product, layout: string, index: number) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product, index);
        else if (layout === 'grid') return gridItem(product);
    };

    const listTemplate = (products: Product[], layout: string) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()} paginator rows={3}/>
        </div>
    )
}
        