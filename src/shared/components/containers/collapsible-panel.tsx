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
`;

const PanelHeader = styled.div<{ isExpanded: boolean }>`
`;

const TitleContainer = styled.div`
`;

const IconContainer = styled.div<{ isExpanded: boolean }>`
`;

const PanelContent = styled.div<{ isExpanded: boolean }>`
`;

const ContentInner = styled.div`
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