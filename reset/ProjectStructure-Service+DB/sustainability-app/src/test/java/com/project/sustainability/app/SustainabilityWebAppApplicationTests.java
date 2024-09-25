package com.project.sustainability.app;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

import com.mongodb.client.result.DeleteResult;
import com.project.sustainability.model.Goal.SupplierGoal;
import com.project.sustainability.service.supplierserviceImpl.GoalsServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SustainabilityWebAppApplicationTests {
	@Mock
	private MongoTemplate mongoTemplate;
	@InjectMocks
	private GoalsServiceImpl goalsService;
	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}
	@Test
	void contextLoads() {
	}

	/**
	 * To test if the action is success
	 */
	@Test
	void deleteGoalsByFields_Success() {
		// Arrange
		String supplierId = "123";
		String pillarName = "Pillar A";

		// Mock behavior
		DeleteResult deleteResult = mock(DeleteResult.class);
		when(deleteResult.getDeletedCount()).thenReturn(5L); // Simulate 5 documents deleted
		when(mongoTemplate.remove(any(Query.class), eq(SupplierGoal.class))).thenReturn(deleteResult);

		// Act
		goalsService.deleteGoalsByFields(supplierId, pillarName);

		// Assert
		verify(mongoTemplate).remove(any(Query.class), eq(SupplierGoal.class));
	}
	/**
	 * To test if there are no documents present with the given values
	 */
	@Test
	void deleteGoalsByFields_NoDocumentsFound() {
		// Arrange
		String supplierId = "123";
		String pillarName = "Pillar A";

		// Mock behavior
		DeleteResult deleteResult = mock(DeleteResult.class);
		when(deleteResult.getDeletedCount()).thenReturn(0L); // Simulate no documents deleted
		when(mongoTemplate.remove(any(Query.class), eq(SupplierGoal.class))).thenReturn(deleteResult);

		// Act & Assert
		RuntimeException thrown = assertThrows(RuntimeException.class, () -> {
			goalsService.deleteGoalsByFields(supplierId, pillarName);
		});

		assertEquals("Error occurred while deleting documents: No documents found matching the criteria", thrown.getMessage());
	}
	/**
	 * To test if there is an exception
	 */
	@Test
	void deleteGoalsByFields_ExceptionThrown() {
		// Arrange
		String supplierId = "123";
		String pillarName = "Pillar A";

		// Mock behavior
		when(mongoTemplate.remove(any(Query.class), eq(SupplierGoal.class)))
				.thenThrow(new RuntimeException("Database error"));

		// Act & Assert
		RuntimeException thrown = assertThrows(RuntimeException.class, () -> {
			goalsService.deleteGoalsByFields(supplierId, pillarName);
		});

		assertEquals("Error occurred while deleting documents: Database error", thrown.getMessage());
	}
}
