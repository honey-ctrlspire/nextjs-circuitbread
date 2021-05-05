export const GetStudyGuideSubjects = {
	query: `
		query StudyGuideSubjects {
			entries(section: "studyGuides", level: 1) {
				id
				title
				slug
				typeHandle
				lessons: children {
					id
					title
					slug
					typeHandle
				}
			}
		}
	`
};

export const GetStudyGuideLessons = {
	query: `
		query StudyGuideLessons {
			entries(section: "studyGuides", type: "studyGuideLesson", orderBy: "postDate desc", limit: 10) {
				id
				title
				slug
				typeHandle
				uri
				subject: parent {
					title
				}
			},
			category(group: "cardboard", slug: "study-guides") {
				title
				...on cardboard_Category {
					shortDescription
				}
			}
		}
	`
};

export const GetStudyGuideLesson = {
	query: `
		query StudyGuideLesson($slug: [String]) {
			entry(section: "studyGuides", type: "studyGuideLesson", slug: $slug) {
				id
				title
				slug
				typeHandle
				uri
				subject: parent {
					title
				}
				...on studyGuides_studyGuideLesson_Entry {
					topics: studyGuideContent {
						...on studyGuideContent_studyGuideTopic_BlockType {
							id
							title: topicTitle
							label: topicLabel
							content: topicContent
						}
					}
				}
			}
		}
	`
};
