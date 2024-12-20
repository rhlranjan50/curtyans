import { IconProps } from "./types";

export default (props: IconProps): JSX.Element => {
	const { width = 24, height = 24 } = props;
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.25 6V19.5H21.75V6H2.25ZM5.48438 7.5H18.5156L12 11.8359L5.48438 7.5ZM3.75 8.15625L11.5781 13.3828L12 13.6406L12.4219 13.3828L20.25 8.15625V18H3.75V8.15625Z" fill="var(--color-flamingo)"></path>
		</svg>
	)
}
