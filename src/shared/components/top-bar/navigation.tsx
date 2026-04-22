import styled from '@emotion/styled';
import NavigationButton from "./navigation-button";
import { HomeIcon, User, Presentation, BadgePlus } from 'lucide-react';

const Navigation = styled.nav`
    display: flex;
`;

export default function NavigationComponent() {

    return (<Navigation>
        <NavigationButton to="/" title='Home' icon={<HomeIcon />} />
        <NavigationButton to="/projects" title='Projects' icon={<Presentation />} />
        <NavigationButton to="/users" title='Users' icon={<User />} />
        <NavigationButton to="/projects/create" title='Create project' icon={<BadgePlus />} />
    </Navigation>);
}