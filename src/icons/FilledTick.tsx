import { IconProps } from "./types";

export default (props: IconProps): JSX.Element => {
	const { width = 16, height = 16 } = props;
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="path-1-inside-1_775_63289" fill="white">
				<path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.8162 6.95897C12.0301 6.78255 12.062 6.46433 11.8873 6.24822C11.7127 6.0321 11.3977 5.99992 11.1838 6.17634L6.6 9.95671L4.81619 8.48556C4.60227 8.30914 4.2873 8.34132 4.11267 8.55743C3.93804 8.77355 3.9699 9.09177 4.18381 9.26819L6.17315 10.9088C6.42158 11.1137 6.77842 11.1137 7.02685 10.9088L11.8162 6.95897Z" />
			</mask>
			<path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.8162 6.95897C12.0301 6.78255 12.062 6.46433 11.8873 6.24822C11.7127 6.0321 11.3977 5.99992 11.1838 6.17634L6.6 9.95671L4.81619 8.48556C4.60227 8.30914 4.2873 8.34132 4.11267 8.55743C3.93804 8.77355 3.9699 9.09177 4.18381 9.26819L6.17315 10.9088C6.42158 11.1137 6.77842 11.1137 7.02685 10.9088L11.8162 6.95897Z" fill="#4CAF50" />
			<path d="M11.8873 6.24822L12.5679 5.69829L12.5679 5.69829L11.8873 6.24822ZM11.8162 6.95897L12.3729 7.63401L11.8162 6.95897ZM11.1838 6.17634L11.7405 6.85139L11.1838 6.17634ZM6.6 9.95671L6.04328 10.6318L6.6 11.0909L7.15672 10.6318L6.6 9.95671ZM4.81619 8.48556L4.25947 9.16061H4.25947L4.81619 8.48556ZM4.11267 8.55743L3.43208 8.0075L3.43208 8.00751L4.11267 8.55743ZM4.18381 9.26819L4.74053 8.59314L4.74053 8.59314L4.18381 9.26819ZM6.17315 10.9088L6.72987 10.2338L6.17315 10.9088ZM7.02685 10.9088L6.47013 10.2338L7.02685 10.9088ZM14.125 8C14.125 11.3827 11.3827 14.125 8 14.125V15.875C12.3492 15.875 15.875 12.3492 15.875 8H14.125ZM8 1.875C11.3827 1.875 14.125 4.61726 14.125 8H15.875C15.875 3.65076 12.3492 0.125 8 0.125V1.875ZM1.875 8C1.875 4.61726 4.61726 1.875 8 1.875V0.125C3.65076 0.125 0.125 3.65076 0.125 8H1.875ZM8 14.125C4.61726 14.125 1.875 11.3827 1.875 8H0.125C0.125 12.3492 3.65076 15.875 8 15.875V14.125ZM11.2067 6.79815C11.0808 6.64234 11.1019 6.41386 11.2595 6.28393L12.3729 7.63401C12.9583 7.15124 13.0431 6.28633 12.5679 5.69829L11.2067 6.79815ZM11.7405 6.85139C11.5777 6.98571 11.3369 6.95924 11.2067 6.79815L12.5679 5.69829C12.0885 5.10496 11.2178 5.01414 10.6271 5.5013L11.7405 6.85139ZM7.15672 10.6318L11.7405 6.85139L10.6271 5.5013L6.04328 9.28166L7.15672 10.6318ZM4.25947 9.16061L6.04328 10.6318L7.15672 9.28166L5.37291 7.81052L4.25947 9.16061ZM4.79326 9.10736C4.66309 9.26846 4.42233 9.29492 4.25947 9.16061L5.37291 7.81052C4.78221 7.32335 3.9115 7.41418 3.43208 8.0075L4.79326 9.10736ZM4.74053 8.59314C4.89808 8.72307 4.91915 8.95156 4.79326 9.10736L3.43208 8.00751C2.95693 8.59554 3.04171 9.46046 3.62709 9.94323L4.74053 8.59314ZM6.72987 10.2338L4.74053 8.59314L3.62709 9.94323L5.61642 11.5839L6.72987 10.2338ZM6.47013 10.2338C6.54497 10.1721 6.65503 10.1721 6.72987 10.2338L5.61642 11.5839C6.18813 12.0554 7.01187 12.0554 7.58358 11.5839L6.47013 10.2338ZM11.2595 6.28393L6.47013 10.2338L7.58358 11.5839L12.3729 7.63401L11.2595 6.28393Z" fill="#4CAF50" mask="url(#path-1-inside-1_775_63289)" />
		</svg>
	)
}