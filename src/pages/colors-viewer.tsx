import styled from "@emotion/styled";

interface SupportingColorsProps {
    columns: number;
}

const SectionContainer = styled.div<SupportingColorsProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: 1em;
    margin-bottom: 2em;
`;

interface Shade {
    name: string;
    value: string;
}

interface ColorShades {
    name: string;
    prefix: string;
    shades: Shade[];
}

interface ShadesDisplayProps {
    colorShades: ColorShades;
}

const ShadesDisplay = styled.div<ShadesDisplayProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.colorShades.shades.length}, 1fr);
    gap: 0;
}
`;

const ShadeBox = styled.div<{ shade: Shade }>`
    background-color: hsl(${props => props.shade.value});
    text-align: center;
`;

const AllColors = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
`;

interface PanelProps {
    color: string;
}

const Panel = styled.div<PanelProps>`
    background-color: hsl(${props => props.color});

    h3 {
        padding: 0.5em;
    }

    div {
        padding: 1em;
    }
`;

interface AlertProps {
    backgroundColor: string;
    headerColor: string;
    textColor: string;
    borderColor: string;
}

const Alert = styled.div<AlertProps>`
    background-color: hsl(${props => props.backgroundColor});
    color: hsl(${props => props.textColor});
    border: 1px solid hsl(${props => props.borderColor});

    h4 {
        color: hsl(${props => props.headerColor});
        padding: 0.5em;
    }

    div {
        padding: 1em;
    }
`;

function generateShades(baseColor: string): Shade[] {
    const shades: Shade[] = [];
    for (let i = 100; i <= 900; i += 100) {
        shades.push({
            name: `${i}`,
            value: `var(--${baseColor}-color-${i})`
        });
    }
    return shades;
}

const brandColor: ColorShades = {
    name: "Brand color",
    prefix: "brand",
    shades: generateShades("brand")
};

const successColor: ColorShades = {
    name: "Success color",
    prefix: "success",
    shades: generateShades("success")
};

const warningColor: ColorShades = {
    name: "Warning color",
    prefix: "warning",
    shades: generateShades("warning")
};

const errorColor: ColorShades = {
    name: "Error color",
    prefix: "error",
    shades: generateShades("error")
};

const informationColor: ColorShades = {
    name: "Information color",
    prefix: "information",
    shades: generateShades("information")
};

const neutralColor: ColorShades = {
    name: "Neutral color",
    prefix: "neutral",
    shades: generateShades("neutral")
};

const colors = [brandColor, successColor, warningColor, errorColor, informationColor, neutralColor];

export default function ColorsViewer() {
    function showShades(colorShades: ColorShades) {
        return (
            <div>
                <h4>{colorShades.name}</h4>
                <ShadesDisplay colorShades={colorShades}>
                    {colorShades.shades.map((shade) => (
                        <ShadeBox key={shade.name} shade={shade}>
                            <div>--{colorShades.prefix}-color-{shade.name}</div>
                        </ShadeBox>
                    ))}
                </ShadesDisplay>
            </div>
        );
    }

    return (
        <div>
            <h2>Colors viewer</h2>
            <h3>Colors with shades</h3>
            {showShades(brandColor)}
            {showShades(successColor)}
            {showShades(warningColor)}
            {showShades(errorColor)}
            {showShades(informationColor)}
            {showShades(neutralColor)}
            <h3>All colors</h3>
            <AllColors>
                {[...Array(9).keys()]
                    .map((shadeIndex) => colors.map(c => (
                    <ShadeBox key={`${c.prefix}-${c.shades[shadeIndex].name}`} shade={c.shades[shadeIndex]}>
                        <div>--{c.prefix}-color-{c.shades[shadeIndex].name}</div>
                    </ShadeBox>
                )))}
            </AllColors>
            <h3>Alerts</h3>
            <SectionContainer columns={5}>
                <Alert
                    backgroundColor="var(--brand-color-100)"
                    headerColor="var(--brand-color-900)"
                    textColor="var(--brand-color-500)"
                    borderColor="var(--brand-color-900)">
                    <h4>Brand color alert</h4>
                    <div>This is an brand color alert.</div>
                </Alert>
                <Alert
                    backgroundColor="var(--success-color-100)"
                    headerColor="var(--success-color-900)"
                    textColor="var(--success-color-500)"
                    borderColor="var(--success-color-900)">
                    <h4>Success color alert</h4>
                    <div>This is a success color alert.</div>
                </Alert>
                <Alert
                    backgroundColor="var(--warning-color-100)"
                    headerColor="var(--warning-color-900)"
                    textColor="var(--warning-color-800)"
                    borderColor="var(--warning-color-900)">
                    <h4>Warning color alert</h4>
                    <div>This is a warning color alert.</div>
                </Alert>
                <Alert
                    backgroundColor="var(--error-color-100)"
                    headerColor="var(--error-color-900)"
                    textColor="var(--error-color-500)"
                    borderColor="var(--error-color-900)">
                    <h4>Error color alert</h4>
                    <div>This is an error color alert.</div>
                </Alert>
                <Alert
                    backgroundColor="var(--information-color-100)"
                    headerColor="var(--information-color-900)"
                    textColor="var(--information-color-500)"
                    borderColor="var(--information-color-900)">
                    <h4>Information color alert</h4>
                    <div>This is an information color alert.</div>
                </Alert>
            </SectionContainer>

            <h3>Supporting colors</h3>
            <SectionContainer columns={4}>
                <Panel color="var(--success-color-500)">
                    <h3>Success color</h3>
                    <div>This is the success color.</div>
                </Panel>

                <Panel color="var(--warning-color-500)">
                    <h3>Warning color</h3>
                    <div>This is the warning color.</div>
                </Panel>

                <Panel color="var(--error-color-500)">
                    <h3>Error color</h3>
                    <div>This is the error color.</div>
                </Panel>

                <Panel color="var(--information-color-500)">
                    <h3>Information color</h3>
                    <div>This is the information color.</div>
                </Panel>
            </SectionContainer>
        </div>);
}
