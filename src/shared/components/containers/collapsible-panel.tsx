import { useState, type ReactNode, type ReactElement, Children } from 'react';
import styled from '@emotion/styled';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsiblePanelProps {
  children: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

interface TitleProps {
  children: ReactNode;
}

interface ContentProps {
  children: ReactNode;
}

const PanelContainer = styled.div`
    border-radius: 0.5rem;
    border: solid black 1px;
`;

const PanelHeader = styled.div<{ isExpanded: boolean }>`
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: ${props => props.isExpanded ? '0' : '0.5rem'};
    border-bottom-right-radius: ${props => props.isExpanded ? '0' : '0.5rem'};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const IconContainer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #718096;
  transition: transform 0.2s ease;
  transform: ${props => props.isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
`;

const PanelContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${props => props.isExpanded ? 'none' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.2s ease;
  opacity: ${props => props.isExpanded ? '1' : '0'};
`;

const ContentInner = styled.div`
  padding: 0.5rem;
`;

// Title component
function Title({ children }: TitleProps) {
  return <>{children}</>;
}

// Content component  
function Content({ children }: ContentProps) {
  return <>{children}</>;
}

function CollapsiblePanel({ 
  children, 
  defaultExpanded = false,
  className 
}: CollapsiblePanelProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Extract Title and Content from children
  const childrenArray = Children.toArray(children) as ReactElement[];
  const titleElement = childrenArray.find(child => 
    child.type === Title
  ) as ReactElement<TitleProps> | undefined;
  const contentElement = childrenArray.find(child => 
    child.type === Content
  ) as ReactElement<ContentProps> | undefined;

  return (
    <PanelContainer className={className}>
      <PanelHeader isExpanded={isExpanded} onClick={toggleExpanded}>
        <TitleContainer>
          {titleElement?.props.children}
        </TitleContainer>
        <IconContainer isExpanded={isExpanded}>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </IconContainer>
      </PanelHeader>
      <PanelContent isExpanded={isExpanded}>
        <ContentInner>
          {contentElement?.props.children}
        </ContentInner>
      </PanelContent>
    </PanelContainer>
  );
}

// Attach subcomponents to main component
CollapsiblePanel.Title = Title;
CollapsiblePanel.Content = Content;

export default CollapsiblePanel;