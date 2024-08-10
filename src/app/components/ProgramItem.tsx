import {
	ProgramItem,
	ProgramBox,
	ProgramContent,
	ProgramFlex,
	ProgramStack,
	ProgramTitle,
	ProgramText,
	ProgramImage,
	useProgram,
} from "planby";

export const Program = ({ program, ...rest }: ProgramItem) => {
	const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } =
		useProgram({
			program,
			...rest,
		});

	const { data } = program;
	const { image, title, since, till } = data;

	const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
	const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

	return (
		<ProgramBox width={styles.width} style={styles.position}>
			<ProgramContent width={styles.width} isLive={isLive}>
				<div className="flex w-full [&_p]:text-lg [&_p]:font-bold [&_p]:text-gray-900  [&_p]:hover:text-white [&_span]:hover:text-white [&_span]:hover:text-white-50">
					{<ProgramImage src={image} alt="Preview" />}
					<ProgramStack>
						<ProgramTitle>{title}</ProgramTitle>
						<ProgramText>
							{sinceTime} - {tillTime}
						</ProgramText>
					</ProgramStack>
				</div>
			</ProgramContent>
		</ProgramBox>
	);
};
