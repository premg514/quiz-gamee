import React from 'react'
import { 
  RecentResultsContainer, 
  ResultsTitle, 
  ResultsList, 
  ResultItem, 
  ResultText, 
  NoResultsText 
} from './styleComponents'

export default function RecentResults(props) {
    const { results } = props;
    return (
        <RecentResultsContainer>
            <ResultsTitle>Recent Results</ResultsTitle>
            {
                results.length > 0 ? (
                    <ResultsList>
                        {results.map((each, index) => (
                            <ResultItem key={index}>
                                <ResultText>Score: {each}</ResultText>
                            </ResultItem>
                        ))}
                    </ResultsList>
                ) : (
                    <NoResultsText>No results yet</NoResultsText>
                )
            }
        </RecentResultsContainer>
    )
}
