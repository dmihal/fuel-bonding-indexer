/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { BigNumberCoder, bn, getMintedAssetId, hexlify } from "fuels";
import {
  BuilderBonding,
  NewPositionEvent,
  PositionBondingEvent,
  RewardsClaimedEvent,
  PositionDepositEvent,
  BuilderBonding_BuilderRewardsExtendedEvent,
  PositionWithdrawEvent,
  BuilderBonding_BaseRewardsSyncedEvent,
  BuilderBonding_ParametersSetEvent,
  BuilderBonding_NewBuilderEvent,
  BuilderBonding_BuilderOwnershipTransferredEvent,
  BuilderBonding_OwnershipTransferredEvent,
  BuilderBonding_BuilderRewardsFundedEvent,
  Position,
  Builder,
} from "generated";

BuilderBonding.NewPositionEvent.handler(async ({ event, context }) => {
  const entity: NewPositionEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    position_id: event.params.position_id.toString(),
    txId: event.transaction.id,
  };

  const u256Coder = new BigNumberCoder("u256");
  const assetId = getMintedAssetId(
    event.srcAddress,
    hexlify(u256Coder.encode(bn(event.params.position_id.toString()))),
  );

  const position: Position = {
    id: event.params.position_id.toString(),
    amount: 0n,
    assetId,
    totalBaseRewardsEarned: 0n,
  };

  context.NewPositionEvent.set(entity);
  context.Position.set(position);
});

BuilderBonding.PositionBondingEvent.handler(async ({ event, context }) => {
  const entity: PositionBondingEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    position_id: event.params.position_id.toString(),
    builder_id: event.params.builder_id.toString(),
    txId: event.transaction.id,
  };

  context.PositionBondingEvent.set(entity);
});

BuilderBonding.RewardsClaimedEvent.handler(async ({ event, context }) => {
  const entity: RewardsClaimedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    position_id: event.params.position_id.toString(),
    amount: event.params.amount,
    txId: event.transaction.id,
  };

  context.RewardsClaimedEvent.set(entity);
});

BuilderBonding.PositionDepositEvent.handler(async ({ event, context }) => {
  const entity: PositionDepositEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    position_id: event.params.position_id.toString(),
    amount: event.params.amount,
    txId: event.transaction.id,
  };

  context.PositionDepositEvent.set(entity);
});

BuilderBonding.BuilderRewardsExtendedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BuilderRewardsExtendedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BuilderRewardsExtendedEvent.set(entity);
});

BuilderBonding.PositionWithdrawEvent.handler(async ({ event, context }) => {
  const entity: PositionWithdrawEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    position_id: event.params.position_id.toString(),
    amount: event.params.amount,
    txId: event.transaction.id,
  };

  context.PositionWithdrawEvent.set(entity);
});

BuilderBonding.BaseRewardsSyncedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BaseRewardsSyncedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BaseRewardsSyncedEvent.set(entity);
});

BuilderBonding.ParametersSetEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_ParametersSetEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_ParametersSetEvent.set(entity);
});

BuilderBonding.NewBuilderEvent.handler(async ({ event, context }) => {
  const builder: Builder = {
    id: event.params.builder_id.toString(),
    owner: event.params.owner.payload.bits.toString(),
    rewardAsset: event.params.reward_asset.bits,
  };

  const entity: BuilderBonding_NewBuilderEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_NewBuilderEvent.set(entity);
  context.Builder.set(builder);
});

BuilderBonding.BuilderOwnershipTransferredEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BuilderOwnershipTransferredEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BuilderOwnershipTransferredEvent.set(entity);
});

BuilderBonding.OwnershipTransferredEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_OwnershipTransferredEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_OwnershipTransferredEvent.set(entity);
});

BuilderBonding.BuilderRewardsFundedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BuilderRewardsFundedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BuilderRewardsFundedEvent.set(entity);
});
