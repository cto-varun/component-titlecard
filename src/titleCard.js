import React from 'react';
import { Breadcrumb, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css';

const { Title } = Typography;

export default function TitleCard(props) {
    const { breadcrumbs, title } = props.component
        ? props.component.params
        : props;

    const getBreadcrumb = () => {
        return breadcrumbs ? (
            <>
                <Breadcrumb>
                    {breadcrumbs.map((path) => (
                        <Breadcrumb.Item key={path.link}>
                            <Link to={path.link}>{path.name}</Link>
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </>
        ) : (
            <></>
        );
    };

    const getTitle = () => {
        return title ? (
            <div>
                <Title level={title.level}>{title.text}</Title>
            </div>
        ) : (
            <></>
        );
    };

    return (
        <div>
            <Card>{getTitle}</Card>
        </div>
    );
}
